import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { Cover } from "@/components/cover";
import Toolbar from "@/components/toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import Document from "./_components/document";

import {preloadQuery} from "convex/nextjs"
import { auth } from "@clerk/nextjs/server"

interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

export default async function DocumentIdPage({
  params,
}: DocumentIdPageProps) {
  const { documentId } = await params
  const { getToken } = await auth()

  const token = (await getToken({ template: "convex" })) ?? undefined;
  if (!token) throw new Error("")
  
  const preloadDocument = await preloadQuery(api.documents.getById, { documentId }, { token })
  if (!preloadDocument) throw new Error('Document not found')

  return <Document preloadedDocument={preloadDocument}/>

}
