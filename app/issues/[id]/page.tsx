import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
<<<<<<< HEAD
=======
import { number } from "zod";
>>>>>>> e3135da6fc175f0840790a29abab2355bfdfa03c

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
<<<<<<< HEAD
=======
  if (typeof params.id !== "number") notFound();

>>>>>>> e3135da6fc175f0840790a29abab2355bfdfa03c
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
