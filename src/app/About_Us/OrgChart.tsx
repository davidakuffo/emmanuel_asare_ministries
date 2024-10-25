import React from "react";
import Image from "next/image";

// Card Component Definition
const Card = ({ className, children }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ className, children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

const OrgChart = () => {
  const executiveCouncil = [
    {
      name: "Apostle Emmanuel Yaw Asare",
      title: "President",
      organization: "Emmanuel Asare Ministries",
      imagePath: "/images/CSI_2670 copy.jpg",
    },
    {
      name: "Mrs. Victoria Akushika Asare",
      title: "Chairperson",
      organization: "",
      imagePath: "/members/emmanuel-asare.jpg",
    },
    {
      name: "Rev. Alfred Kwabena Zidol",
      title: "Member",
      organization: "",
      imagePath: "/members/emmanuel-asare.jpg",
    },
    {
      name: "Rev. Kwesi Wilson",
      title: "Member",
      organization: "",
      imagePath: "/members/emmanuel-asare.jpg",
    },
    {
      name: "Mrs. Margaret Agyei (ESQ)",
      title: "Member",
      organization: "",
      imagePath: "/members/emmanuel-asare.jpg",
    },
  ];

  const boardOfTrustees = [
    {
      name: "Rev. Kwesi Wilson",
      title: "Operation Manager",
      subTitle: "Member",
      extraTitle: "Chairperson",
      imagePath: "/members/emmanuel-asare.jpg",
    },
    {
      name: "Rev. Michael Nhyira",
      title: "Head of Missions",
      subTitle: "Member",
      imagePath: "/members/emmanuel-asare.jpg",
    },
    {
      name: "Mrs. Gifty Wandem",
      title: "Executive Secretary",
      subTitle: "Member",
      imagePath: "/members/emmanuel-asare.jpg",
    },
    {
      name: "Mr. Brain Elorm Korgah",
      title: "Chief Financial Officer",
      subTitle: "Member",
      imagePath: "/members/emmanuel-asare.jpg",
    },
    {
      name: "Mrs. Margaret Agyei",
      title: "Education & Need Trust Fund",
      subTitle: "Member",
      imagePath: "/members/emmanuel-asare.jpg",
    },
  ];

  const MemberCard = ({
    name,
    title,
    organization,
    subTitle,
    extraTitle,
    imagePath,
  }) => (
    <Card className="w-64 bg-white hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md bg-gray-100"></div>
        <div className="text-center">
          <h3 className="font-bold text-sm">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{title}</p>
          {organization && (
            <p className="text-sm text-gray-600 mt-1">{organization}</p>
          )}
          {subTitle && (
            <p className="text-sm text-gray-600 mt-1">({subTitle})</p>
          )}
          {extraTitle && (
            <p className="text-sm text-gray-600 mt-1">({extraTitle})</p>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          EXECUTIVE COUNCIL
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {executiveCouncil.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center mb-8">
          BOARD OF TRUSTEES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {boardOfTrustees.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
