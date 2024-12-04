import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// PageSectionUse => DMITSEC2HERO

export function ComponentOne({ data, handler, editorLoaded }) {
  return (
    <div className="bg-blue-50 py-12 px-6 flex flex-col md:flex-row items-center mx-auto shadow-lg rounded-md">
      <div className="pr-4 max-w-[1500px] mx-auto overflow-hidden">
        {/* Editable heading */}
        <div className="mb-10">
          <CKEditor
            editor={ClassicEditor}
            name="heading"
            data={data?.heading}
            onChange={(event, editor) => {
              const newData = editor.getData();
              handler('heading', newData, 'editor', 'ComponentOne');
            }}
            editorLoaded={editorLoaded}
          />
        </div>

        {/* Editable description */}
        <CKEditor
          editor={ClassicEditor}
          name="description"
          data={data?.description}
          onChange={(event, editor) => {
            const newData = editor.getData();
            handler('description', newData, 'editor', 'ComponentOne');
          }}
          editorLoaded={editorLoaded}
        />

        {/* Editable Button Text */}
        <div className="mt-6">
          <input
            type="text"
            value={data?.buttonText}
            onChange={(e) => handler('buttonText', e.target.value, 'input', 'ComponentOne')}
            className="w-full mb-4 py-2 px-3 border border-gray-300 rounded"
            placeholder="Button Text"
          />
          {/* <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            {data?.buttonText || 'Get Your DMIT Test Now'}
          </button> */}
        </div>
      </div>

      {/* YouTube video */}
      <div className="md:w-1/3 mt-6 md:mt-0">
        {/* Editable Video URL */}
        <input
          type="text"
          value={data?.videoUrl}
          onChange={(e) => handler('videoUrl', e.target.value, 'input', 'ComponentOne')}
          className="w-full mb-4 py-2 px-3 border border-gray-300 rounded"
          placeholder="YouTube Video URL"
        />

        <input
          type="text"
          value={data?.videoTitle}
          onChange={(e) => handler('videoTitle', e.target.value, 'input', 'ComponentOne')}
          className="w-full mb-4 py-2 px-3 border border-gray-300 rounded"
          placeholder="YouTube Video Title"
        />

        {/* Editable Video Description */}
        <input
          type="text"
          value={data?.videoDescription}
          onChange={(e) => handler('videoDescription', e.target.value, 'input', 'ComponentOne')}
          className="w-full py-2 px-3 border border-gray-300 rounded"
          placeholder="Video Description"
        />
        {/* <p className="text-gray-600 text-sm text-center mt-2">
          {data?.videoDescription ||
            'Watch the Founder & CEO of Brainwonders, Mr. Manish Naidu, talk about its DMIT franchise model'}
        </p> */}
      </div>
    </div>
  );
}

export function ComponentTwo({ data, handler, editorLoaded }) {
  // const [secondCompData, setSecondCompData] = useState({
  //   content: `The full form of DMIT is the Dermatoglyphics Multiple Intelligence Test (DMIT) is a biometric analysis based on the scientific study of fingerprints. It is useful for all age groups and helps understand an individual’s potential, personality type, SWOT analysis, learning style, career introspection, and more. DMIT is particularly beneficial for parents and teachers, providing insights into a child's innate strengths and areas that need development. Using information from the child's biometrics, the DMIT assessment offers actionable insights and appropriate career recommendations. Dermatoglyphics is the study of the patterns of skin ridges on human fingers, toes, and soles. It reveals the congenital links between our fingers and our intrinsic qualities and talents. These patterns are formed from the external ectoderm and typically develop during the fetal stage, with fingerprints forming between the 13th and 21st weeks.
  //  Medical experts and scientists have discovered that the distribution of brain cells in different parts of the brain can be understood through the DMIT test. This helps reveal a person's multiple intelligences, innate potential capabilities, and personality.
  //  Our fingerprints reveal what we need and how we learn, transforming our lives through a holistic education approach.`,
  // });


  return (
    <div>
      <div className="max-w-6xl mx-auto mt-10 p-5 bg-gray-50 shadow-lg rounded-md">
        <CKEditor
          editor={ClassicEditor}
          data={data.content}
          onChange={(event, editor) => {
            const data = editor.getData();
            // setEditorData(data);
            handler("content", data,'editor', 'ComponentTwo');
          }}
          editorLoaded={editorLoaded}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "|",
              "undo",
              "redo",
              "fontSize",
              "fontFamily",
              "alignment",
              "highlight",
              "insertTable",
              "|",
              "imageUpload",
              "mediaEmbed",
              "removeFormat",
              "sourceEditing",
            ],
            fontSize: {
              options: [9, 11, 13, "default", 17, 19, 21],
            },
          }}
        />
      </div>
    </div>
  );
}

export function ComponentThree({ data, handler, editorLoaded }) {
  // return <input value={ComponentThree.h1_data ?? ""} name="h1_data" onChange={(e)=>{handlerCompnentInput("componentThree", e.value)}}>Component Three</div>;

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

  // Handler function to update specific fields within the thirdCompData state
  const handleThirdCompData = (id, key, value) => {
    // If we're updating the title (not within a card), handle it here
    if (id === null) {
      setThirdCompData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    } else {
      // Update specific card data
      setThirdCompData((prevData) => ({
        ...prevData,
        cards: prevData.cards.map((card) =>
          card.id === id ? { ...card, [key]: value } : card
        ),
      }));
    }
  };

  const EditableCard = ({
    title,
    description,
    imageUrl,
    link,
    handler,
    id,
  }) => {
    const handleImageDelete = () => {
      // Set the image URL to null when deleting the image
      handleThirdCompData(id, "imageUrl", null);
    };

    return (
      <div className="max-w-xs bg-white rounded-lg shadow-md p-6 m-4 flex flex-col items-center">
        {/* Circular Image Section */}
        {imageUrl ? (
          <div className="relative">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src={imageUrl}
              alt={title}
            />
            <button
              className="absolute bottom-[-30px] right-0 bg-red-500 text-white font-bold py-1 px-2 rounded-full m-2 text-xs"
              onClick={handleImageDelete}
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image Deleted</span>
          </div>
        )}

        {/* Editable Link Section */}
        <input
          type="text"
          value={link}
          onChange={(e) => handler(id, "link", e.target.value)}
          className="mt-8 p-2 w-full border border-gray-300 rounded-md text-center text-lg font-bold"
          placeholder="Link"
        />

        <h3 className="font-bold text-lg text-center mt-4">{title}</h3>

        {/* Editable Text Area */}
        <textarea
          value={description}
          onChange={(e) =>
            handler(id, "description", e.target.value)
          }
          className="mt-2 p-2 w-full border border-gray-300 rounded-md text-center text-gray-600"
          placeholder="Edit description"
          rows="3"
        />
      </div>
    );
  };

  return (
    <div className="2xl:px-56 py-6 bg-gray-200">
      <div className="w-full flex justify-center ">
        <input
          type="text"
          value={data.title}
          onChange={(e) => handler('heading', e.target.value, 'editor', 'ComponentThree')} // Handler for title input
          className="w-full max-w-3xl border border-gray-300 rounded-md text-center p-2 font-bold text-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {data.cards.map((card) => (
          <EditableCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            link={card.link}
            id={card.id}
            handleThirdCompData={handler}
          />
        ))}
      </div>
    </div>
  );
}
// inputState = {"componentthree" : {"h1_data":"this is title in h1"}}

export function ComponentFour({ data, handler, editorLoaded }) {
  // Feature card component for each feature
  const DMITFeatureCard = ({
    title,
    description,
    icon,
    bgColor,
    onChange,
    id,
  }) => {
    return (
      <div
        className={`relative bg-${bgColor}-500 rounded-lg p-6 m-4 flex flex-col items-center w-[450px]`}
      >
        {/* Title Input */}
        <input
          type="text"
          className="text-xl lg:text-2xl font-bold bg-white w-full rounded-lg mb-2 heading-font text-center bg-transparent border-none outline-none"
          value={title}
          onChange={(e) => onChange(id, "title", e.target.value, 'editor', 'ComponentFourth')}
        />
        
        {/* Description Input */}
        <textarea
          className=" p-5 rounded-xl bg-white mb-10 bg-transparent border-none outline-none w-full resize-none"
          rows={10}
          value={description}
          onChange={(e) => onChange(id, "description", e.target.value, 'editor', 'ComponentFourth')}
        />
        
        {/* Icon */}
        <div className="absolute left-20 bottom-[-25px]">
          <img
            src={icon}
            alt={title}
            className="w-20 h-20 rounded-full"
            width={120}
            height={120}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 py-5 mt-20 md:px-9">
      <div className="mb-16">
        {/* Editable Heading */}
        <input
          type="text"
          className="text-2xl lg:text-3xl font-bold text-center mb-3 mt-12 bg-white heading-font rounded-lg p-2 text-[#022F46] block w-full"
          value={data.heading}
          onChange={(e) => handler("heading", e.target.value, 'editor', 'ComponentFourth')}
          style={{ fontWeight: "600" }}
        />

        {/* Editable Subtitle */}
        <input
          type="text"
          className="text-center mb-8 px-2 text-[16px] block w-full bg-white resize-none rounded-lg p-2"
          value={data.subHeading}
          onChange={(e) => handler("subHeading", e.target.value, 'editor', 'ComponentFourth')}
        />
        
        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center">
          {data.cards.map((feature, index) => (
            <DMITFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
              onChange={handler}
              id={feature.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ComponentFive({data,handler,editorLoaded}) {
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

  // // Handler function to update specific fields within the fifthCompData state
  // const handleFifthCompData = (id, key, value) => {
  //   setFifthCompData((prevData) =>
  //     prevData.map((section) =>
  //       section.id === id ? { ...section, [key]: value } : section
  //     )
  //   );
  // };

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-8">
      {data.map((section) => (
        <div
          key={section.id}
          className={`${section.bgColor} p-8 flex-1 lg:px-20`}
        >
          <input
            type="text"
            className="text-2xl lg:text-3xl font-bold text-center mb-3 bg-white heading-font rounded-lg p-2 text-[#022F46] block w-full"
            value={section.heading}
            onChange={(e) =>
              handler(section.id, "heading", e.target.value)
            }
            style={{ fontWeight: "600" }}
          />

          <textarea
            className={`w-full bg-white p-4 rounded-lg resize-none shadow-md focus:outline-none focus:ring-2 ${section.inputStyle}`}
            rows="15"
            value={section.text}
            onChange={(e) =>
              handler(section.id, "text", e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}

export function ComponentSix({data,hander,editorLoaded}) {

  const [sixthCompData, setSixthCompData] = useState({
    heading:"BRAIN AND FINGER CONNECTION",
    subHeading:"Right Brain is corresponding to Left Hand and Left Brain is corresponding to Right Hand",
    imageUrl:"",
    content:`The full form of DMIT is the Dermatoglyphics Multiple Intelligence Test (DMIT) is a biometric analysis based on the scientific study of fingerprints. It is useful for all age groups and helps understand an individual’s potential, personality type, SWOT analysis, learning style, career introspection, and more. DMIT is particularly beneficial for parents and teachers, providing insights into a child's innate strengths and areas that need development. Using information from the child's biometrics, the DMIT assessment offers actionable insights and appropriate career recommendations.

Dermatoglyphics is the study of the patterns of skin ridges on human fingers, toes, and soles. It reveals the congenital links between our fingers and our intrinsic qualities and talents. These patterns are formed from the external ectoderm and typically develop during the fetal stage, with fingerprints forming between the 13th and 21st weeks.

Medical experts and scientists have discovered that the distribution of brain cells in different parts of the brain can be understood through the DMIT test. This helps reveal a person's multiple intelligences, innate potential capabilities, and personality.

Our fingerprints reveal what we need and how we learn, transforming our lives through a holistic education approach.`
  });

   // Function to handle file input change
   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Create a URL for the file
      handleSixthCompDataChanger("imageUrl", fileURL); // Call the handler with the new image URL
    }
  };

  const handleSixthCompDataChanger = (name,value)=>{
    setSixthCompData((prevData)=>({
      ...prevData,
      [name]:value
    })
    )
  }

  return (
    <div className="p-8 md:px-28">
      {/* Editable title */}
      <input
        className="text-2xl md:text-3xl border-2 border-gray-300 p-2 rounded-lg  font-semibold mb-2 text-center mt-10 heading-font text-[#022F46] w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
        value={data.heading}
        name="heading"
        onChange={(e) => hander("heading", e.target.value, 'editor', 'ComponentFourth')}
      />

      {/* Editable subtitle */}
      <input
        className="md:text-[16px] border-2 border-gray-300 mb-8 p-2 rounded-lg text-center w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
        value={data.subHeading}
        name="subHeading"
        onChange={(e) =>
          hander("subHeading", e.target.value, 'editor', 'ComponentFourth')
        }
      />

      <div className="flex flex-col lg:flex-row items-center">
        {/* Editable image */}
        <div className="flex-1 mb-4 md:mb-0 md:mr-4">
          <img
            src={
              data.imageUrl
                ? data.imageUrl
                : "https://www.centurymedicaldental.com/wp-content/uploads/2022/01/Left-and-Right-Hemisphere-of-the-Brain.jpg.webp"
            }
            alt="Brain and Finger Connection"
            className="w-full h-auto"
            width={120}
            height={120}
          />

          {/* File input button to select an image */}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            className="mt-4 hidden"
            onChange={handleImageChange}
          />
          {/* Custom file input button */}
          <div className="text-center">
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Upload Image
            </button>
          </div>
        </div>

        <div className="flex-1 md:text-[16px] ">
          {/* Editable paragraphs */}
          <CKEditor
            editor={ClassicEditor}
            data={data.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              hander("content", data,'editor', 'ComponentFourth');
            }}
            config={{
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "blockQuote",
                "|",
                "undo",
                "redo",
                "fontSize",
                "fontFamily",
                "alignment",
                "highlight",
                "insertTable",
                "|",
                "imageUpload",
                "mediaEmbed",
                "removeFormat",
                "sourceEditing",
              ],
              fontSize: {
                options: [9, 11, 13, "default", 17, 19, 21],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
