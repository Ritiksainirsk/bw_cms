"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import AlertPopup from "../../../../components/common/AlertPopup";
import DynamicPageTemplate from "../../../../components/admindashboard/pagemanagement/DynamicPageTemplate";

export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertPopup, setAlertPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await fetch(
          `http://localhost:4001/api/templates/${params.id}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch template");
        }

        if (!data || !data.data) {
          throw new Error("Invalid template data received");
        }

        setTemplate(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching template:", error);
        setAlertPopup({
          show: true,
          type: "error",
          message: error.message || "Failed to load template",
        });
        setLoading(false);
      }
    };

    if (params.id) {
      fetchTemplate();
    }
  }, [params.id]);

  const handleSave = async (formData) => {
    try {
      // Implement your save logic here
      const response = await fetch(
        `http://localhost:4001/api/pages/${template.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      router.push("/dashboard/pagemanagement");
    } catch (error) {
      console.error("Error saving changes:", error);
      setAlertPopup({
        show: true,
        type: "error",
        message: error.message || "Failed to save changes",
      });
    }
  };

  const handleCancel = () => {
    router.push("/dashboard/pagemanagement");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading template...</div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-500">Template not found</div>
      </div>
    );
  }

  return (
    <div className="p-6 w-full h-full">
      <div className="">
        <DynamicPageTemplate template={template} onSave={handleSave} />
      </div>
    </div>
  );
}
