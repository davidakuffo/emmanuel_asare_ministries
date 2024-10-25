import React from "react";

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
    },
    {
      name: "Mrs. Victoria Akushika Asare",
      title: "Chairperson",
      organization: "",
    },
    {
      name: "Rev. Alfred Kwabena Zidol",
      title: "Member",
      organization: "",
    },
    {
      name: "Rev. Kwesi Wilson",
      title: "Member",
      organization: "",
    },
    {
      name: "Mrs. Margaret Agyei (ESQ)",
      title: "Member",
      organization: "",
    },
  ];

  const boardOfTrustees = [
    {
      name: "Rev. Kwesi Wilson",
      title: "Operation Manager",
      subTitle: "Member",
      extraTitle: "Chairperson",
    },
    {
      name: "Rev. Michael Nhyira",
      title: "Head of Missions",
      subTitle: "Member",
    },
    {
      name: "Mrs. Gifty Wandem",
      title: "Executive Secretary",
      subTitle: "Member",
    },
    {
      name: "Mr. Brain Elorm Korgah",
      title: "Chief Financial Officer",
      subTitle: "Member",
    },
    {
      name: "Mrs. Margaret Agyei",
      title: "Education & Need Trust Fund",
      subTitle: "Member",
    },
  ];

  const MemberCard = ({ name, title, organization, subTitle, extraTitle }) => (
    <Card className="w-64 bg-white">
      <CardContent className="p-4">
        <div className="w-full h-48 bg-gray-200 mb-4"></div>
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
