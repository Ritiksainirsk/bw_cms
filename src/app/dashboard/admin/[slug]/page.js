'use client'

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DmitOverviewSection from "@/components/editableComponents/DmitOverviewSection";
import BenefitsForAllAges from "@/components/editableComponents/BenefitsForAllAges";
import TestFeatures from "@/components/editableComponents/TestFeatures";
import DermatoglyphicsMultipleIntelligenceOverviewPanel from "@/components/editableComponents/DermatoglyphicsMultipleIntelligenceOverviewPanel";
import BrainAndFingerprintPanel from "@/components/editableComponents/BrainAndFingerprintPanel";
import Editorr from "@/components/editableComponents/Editor";

export default function DmitEditablePage() {
  // State for each component
  const [firstCompData, setFirstCompData] = useState({
    heading: "DISCOVER YOUR INBORN POTENTIAL AND SHINE WITH DMIT TEST",
    description:"Take the world’s most-advanced Career Assessment Test and find your best Career, Course, and College",
  });
  const [secondCompData, setSecondCompData] = useState({
    content: `The full form of DMIT is the Dermatoglyphics Multiple Intelligence Test (DMIT) is a biometric analysis based on the scientific study of fingerprints. It is useful for all age groups and helps understand an individual’s potential, personality type, SWOT analysis, learning style, career introspection, and more. DMIT is particularly beneficial for parents and teachers, providing insights into a child's innate strengths and areas that need development. Using information from the child's biometrics, the DMIT assessment offers actionable insights and appropriate career recommendations. Dermatoglyphics is the study of the patterns of skin ridges on human fingers, toes, and soles. It reveals the congenital links between our fingers and our intrinsic qualities and talents. These patterns are formed from the external ectoderm and typically develop during the fetal stage, with fingerprints forming between the 13th and 21st weeks.
   Medical experts and scientists have discovered that the distribution of brain cells in different parts of the brain can be understood through the DMIT test. This helps reveal a person's multiple intelligences, innate potential capabilities, and personality.
   Our fingerprints reveal what we need and how we learn, transforming our lives through a holistic education approach.`,
  });
  const [thirdCompData, setThirdCompData] = useState({
    title: "Benefits of DMIT Test for All Ages Group",
    cards: [
      {
        id: 1,
        link: "",
        description:
          "Helps parents make decisions on understanding the child's behavior, parenting styles, and apt teaching methods.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for Toddlers (1-4 years)",
      },
      {
        id: 2,
        link: "",
        description:
          "Understanding their learning styles and intelligence profiles to explore their strengths.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for Children (4-10 years)",
      },
      {
        id: 3,
        link: "",
        description:
          "DMIT Test for Students help to Knowing the strengths and recommendations to work on problem areas helps understand your intrinsic potential. It highlights the innate primary and secondary learning styles.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for Students (11 to 17 years)",
      },
      {
        id: 4,
        link: "",
        description:
          "DMIT Test for Students help to Knowing the strengths and recommendations to work on problem areas helps understand your intrinsic potential. It highlights the innate primary and secondary learning styles.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for Adult (25 years and above)",
      },
      {
        id: 5,
        link: "",
        description:
          "DMIT Test for Students help to Knowing the strengths and recommendations to work on problem areas helps understand your intrinsic potential. It highlights the innate primary and secondary learning styles.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for Career Guidance (18 years and above)",
      },
      {
        id: 6,
        link: "",
        description:
          "DMIT Test for Students help to Knowing the strengths and recommendations to work on problem areas helps understand your intrinsic potential. It highlights the innate primary and secondary learning styles.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for institutional (all years)",
      },
      {
        id: 7,
        link: "",
        description:
          "DMIT Test for Students help to Knowing the strengths and recommendations to work on problem areas helps understand your intrinsic potential. It highlights the innate primary and secondary learning styles.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for Students (11 to 17 years)",
      },
      {
        id: 8,
        link: "",
        description:
          "DMIT Test for Students help to Knowing the strengths and recommendations to work on problem areas helps understand your intrinsic potential. It highlights the innate primary and secondary learning styles.",
        imageUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
        title: "DMIT Test for Career Guidance (18 years and above)",
      },
      // Add more cards as needed...
    ],
  });
  const [fourthCompData, setFourthCompData] = useState({
    title: "DERMATOGLYPHICS MULTIPLE INTELLIGENCE TEST (DMIT TEST) FEATURES",
    description:"Implementing the study of fingerprints to help discover & expand an individual's potential.",
    cards: [
      {
        id: 1,
        description:"There are no two identical fingerprints. One's 10 fingers are not the same. Dermatoglyphics style, striae height, density, quantity, and location of the point is not the same for everyone. No individual has ever displayed the same fingerprint from another digit even if taken from the same hand.",
        title: "UNIQUENESS",
        icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqDfY1WflTArk8wsPNzn3l4kWZUMFwEC-PGZF6P-n9S93wOFFP", // replace with your icon path
        bgColor: "gray",
      },
      {
        id: 2,
        description:
          "The raised pattern network of lifetime from birth to death will not change even if it is due to the regeneration of the labor dermatoglyphics style, quantity, and profile shape which is determined the same later.",
        title: "INVARIANCE",
        icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTp4HgfvnkROMHRYBeynj6-o0zxV3geitKswygp_Wui2we55J2U", // replace with your icon path
        bgColor: "teal",
      },
      {
        id: 3,
        description:
          "According to science statistics, immediate family members will be more or less the same between the striae. Normal human cells chromosomes may have a mutation due to a structural change resulting in striae mutation. Therefore, the striae have inherited the mutation.",
        title: "HEREDITARY",
        icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ195Op7QXlXU3498vRnp3SKEorV8Wd_cWcl22xtc0oCbneKf4P", // replace with your icon path
        bgColor: "orange",
      },
    ],
  });
  const [fifthCompData, setFifthCompData] = useState([
    {
      id: 1,
      heading: "DERMATOGLYPHICS MEANING",
      text: `Dermatoglyphics is the scientific study of the patterns of ridges on
the skin of human fingers, palms, toes, and soles. These patterns,
including loops, whorls, and arches, are formed during fetal
development and remain unique and consistent throughout a person's
life. The primary focus is on analyzing fingerprint patterns, which
are categorized into these three main types, each with various
subtypes. Dermatoglyphics is influenced by genetic and environmental
factors during fetal development, making it a fascinating field that
bridges biology and genetics. The uniqueness and permanence of these
patterns make dermatoglyphics valuable for identification purposes,
such as in forensic science. Additionally, it is used in medical
research to study correlations between fingerprint patterns and
certain genetic or developmental conditions. Overall, dermatoglyphics
provides insights into individual identity and developmental biology,
contributing to various scientific and practical applications.`,
      bgColor: "bg-blue-100",
      inputStyle: "focus:ring-blue-500",
    },
    {
      id: 2,
      heading: "WHAT IS MULTIPLE INTELLIGENCE TEST?",
      text: `A Multiple Intelligence Test is an assessment tool designed to measure
an individual's strengths and abilities across various intelligence
domains. Several researchers and theorists developed this concept, and
a prominent psychologist, Howard Gardner, proposed that intelligence
is not limited to a single factor but encompasses multiple distinct
types of intelligence. These intelligences include linguistic,
logical-mathematical, spatial, bodily-kinesthetic, musical,
interpersonal, intrapersonal, and naturalistic intelligence. The
Multiple Intelligence Test evaluates a person's proficiency and
preferences in these different areas. This assessment can provide
valuable insights into an individual's unique strengths and learning
styles, helping them better understand themselves and tailor their
educational or career paths accordingly at any age.`,
      bgColor: "bg-orange-100",
      inputStyle: "focus:ring-orange-500",
    },
  ]);
  const [sixthCompData, setSixthCompData] = useState({
    heading:"BRAIN AND FINGER CONNECTION",
    subHeading:"Right Brain is corresponding to Left Hand and Left Brain is corresponding to Right Hand",
    imageUrl:"",
    content:`The full form of DMIT is the Dermatoglyphics Multiple Intelligence Test (DMIT) is a biometric analysis based on the scientific study of fingerprints. It is useful for all age groups and helps understand an individual’s potential, personality type, SWOT analysis, learning style, career introspection, and more. DMIT is particularly beneficial for parents and teachers, providing insights into a child's innate strengths and areas that need development. Using information from the child's biometrics, the DMIT assessment offers actionable insights and appropriate career recommendations.

Dermatoglyphics is the study of the patterns of skin ridges on human fingers, toes, and soles. It reveals the congenital links between our fingers and our intrinsic qualities and talents. These patterns are formed from the external ectoderm and typically develop during the fetal stage, with fingerprints forming between the 13th and 21st weeks.

Medical experts and scientists have discovered that the distribution of brain cells in different parts of the brain can be understood through the DMIT test. This helps reveal a person's multiple intelligences, innate potential capabilities, and personality.

Our fingerprints reveal what we need and how we learn, transforming our lives through a holistic education approach.`
  });


  // Handler to update card data of third component ----->>>>>>>>>>>>>>
  const handleThirdCompData = (id, field, value) => {
    setThirdCompData((prevState) => ({
      ...prevState, // Keep the existing state
      cards: prevState.cards.map((card) =>
        card.id === id ? { ...card, [field]: value } : card
      ), // Update the specific card in the cards array
    }));
  };
  
    // Example of how to add new card data or modify the title
    const handleThirdCompTitle = (newTitle) => {
      setThirdCompData((prevData) => ({
        ...prevData,
        title: newTitle, // Update the title
      }));
    };

  // -------<<<<<<<<<<<<<<<<<<<<<<<<


  //----------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Handler Fourth Component 
  const handleForthCompData = (id, field, value) => {
    setFourthCompData((prevState) => ({
      ...prevState, // Keep the existing state
      cards: prevState.cards.map((card) =>
        card.id === id ? { ...card, [field]: value } : card
      ), // Update the specific card in the cards array
    }));
  };

  const handleFourthCompTitle = (newTitle) => {
    setFourthCompData((prevData) => ({
      ...prevData,
      title: newTitle, // Update the title
    }));
  };
  const handleFourthCompDescription = (newDescription) => {
    setFourthCompData((prevData) => ({
      ...prevData,
      description: newDescription, // Update the
    }));
  };
  // <<<<<<<<<<<<<<<<-----------------------

  // ------------->>>>>>>>>>>>>>>>>>>>> fifth component
  // Function to handle heading changes
  const handleFifthCompHeadingChange = (id, newHeading) => {
    setFifthCompData(
      fifthCompData.map((item) =>
        item.id === id ? { ...item, heading: newHeading } : item
      )
    );
  };

  // Function to handle text changes
  const handleFifthCopmTextChange = (id, newText) => {
    setFifthCompData(
      fifthCompData.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };
// <<<<<<<<<<<<<<<<<<------------------

// ----------------->>>>>>>>>>>>>>>>>>>>>>>> sixth comp 
const handleSixthCompDataChanger = (name,value)=>{
  setSixthCompData((prevData)=>({
    ...prevData,
    [name]:value
  })
  )
}

// <<<<<<<<<<<<<<<<<<<<<<<<---------------------------

  // Generic handler for state updates based on input names
  const handleInputChange = (name, value) => {
    switch (name) {
      case "heading":
        setFirstCompData((prevState) => ({ ...prevState, heading: value }));
        break;
      case "description":
        setFirstCompData((prevState) => ({ ...prevState, description: value }));
        break;
      case "content":
        setSecondCompData((prevState) => ({ ...prevState, content: value }));
        break;
      case "image":
        setSecondCompData((prevState) => ({ ...prevState, content: value }));
        break;
      // Continue for other fields...
      default:
        break;
    }
  };

  return (
    <div>
      <div className="bg-blue-50 py-12 px-6 flex flex-col md:flex-row items-center mx-auto shadow-lg rounded-md">
        <div className=" pr-4 max-w-[1500px] mx-auto overflow-hidden">
          {/* Editable heading */}
          <div className="mb-10">
            <CKEditor
              editor={ClassicEditor}
              data={firstCompData.heading}
              onChange={(event, editor) => {
                const data = editor.getData();
                handleInputChange("heading", data);
              }}
            />
          </div>

          {/* Editable description */}
          <CKEditor
            editor={ClassicEditor}
            data={firstCompData.description}
            onChange={(event, editor) => {
              const data = editor.getData();
              handleInputChange("description", data);
            }}
          />

          {/* Button */}
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Get Your DMIT Test Now
          </button>
        </div>

        {/* YouTube video */}
        <div className="md:w-1/3 mt-6 md:mt-0">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/ISv2-cLrtnY" // Replace with the actual video ID
            title="DMIT Test Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-gray-600 text-sm text-center mt-2">
            Watch the Founder & CEO of Brainwonders, Mr. Manish Naidu, talk
            about its DMIT franchise model
          </p>
        </div>
      </div>
      <DmitOverviewSection data={secondCompData} handleInputChange={handleInputChange} />
      <BenefitsForAllAges
        data={thirdCompData}
        handleThirdCompData={handleThirdCompData}
        handleThirdCompTitle={handleThirdCompTitle}
      />
      <TestFeatures
        data={fourthCompData}
        handleForthCompData={handleForthCompData}
        handleFourthCompTitle={handleFourthCompTitle}
        handleFourthCompDescription={handleFourthCompDescription}
      />
      <DermatoglyphicsMultipleIntelligenceOverviewPanel data={fifthCompData} handleFifthCompHeadingChange={handleFifthCompHeadingChange} handleFifthCopmTextChange={handleFifthCopmTextChange}/>
      <BrainAndFingerprintPanel data={sixthCompData} handleSixthCompDataChanger={handleSixthCompDataChanger}/>
      <Editorr/>
      <div className="text-center">
        <button className="bg-[#022F46] text-white px-6 py-2 rounded-lg hover:bg-[#022f46d4] mb-6">
          Submit
        </button>
      </div>
    </div>
  );
}
