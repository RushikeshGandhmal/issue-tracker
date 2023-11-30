import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import { number } from "zod";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
    </>
  );
};

export default IssueDetailPage;
