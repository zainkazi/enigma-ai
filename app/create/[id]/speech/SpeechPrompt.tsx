"use client";

import React, { useEffect, useState } from "react";
import SpeedSelector from "./_components/SpeedSelector";
import SpeechInput from "./_components/SpeechInput";
import SpeechGenderSelector from "./_components/SpeechGenderSelector";
import { Button } from "@/components/ui/button";
import { useSpeechStore } from "@/store";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { fetchProject } from "@/utils/actions";
import { Project } from "@prisma/client";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { SpeechSchema } from "@/validationSchemas";
import { errorClassnames } from "../avatar/CharacterPrompt";
import Link from "next/link";
import SpeechPromptLoading from "./_components/SpeechPromptLoading";

type FormErrors = {
  gender?: { _errors: string[] };
  speed?: { _errors: string[] };
  speechInput?: { _errors: string[] };
};

const SpeechPrompt = () => {
  const params = useParams();
  const formData = useSpeechStore((state) => state.formData);
  const setGeneratingSpeech = useSpeechStore(
    (state) => state.setGeneratingSpeech
  );
  const setFormData = useSpeechStore((state) => state.setFormData);
  const setSpeechUrl = useSpeechStore((state) => state.setSpeechUrl);
  const loadingProject = useSpeechStore((state) => state.loadingProject);
  const setLoadingProject = useSpeechStore((state) => state.setLoadingProject);
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [validationErrors, setValidationErrors] = useState<FormErrors>({});
  const router = useRouter();

  useEffect(() => {
    const getProject = async () => {
      setLoadingProject(true);
      const data = await fetchProject(params.id as string);
      setLoadingProject(false);

      if (data) {
        setFormData("speed", Number(data.speechSpeed));
        setFormData("gender", data.speechGender);
        setFormData("speechInput", data.speechPrompt);
      }
      if (data?.speechUrl) {
        setSpeechUrl(data.speechUrl);
        setGenerated(true);
      }
    };

    getProject();

    return () => {
      setSpeechUrl("");
    };
  }, [params.id, setFormData, setSpeechUrl, setLoadingProject]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = SpeechSchema.safeParse(formData);

    if (validationResult.success) {
      setGeneratingSpeech(true);
      setValidationErrors({});
      setGenerating(true);
      const speech = await axios.post<Project>(
        "/api/speech",
        {
          ...formData,
          projectId: params.id,
        },
        {
          timeout: 600000,
        }
      );

      setGenerating(false);
      setGenerated(true);
      setGeneratingSpeech(false);
      setSpeechUrl(speech.data.speechUrl || "");
    } else {
      setValidationErrors(validationResult.error.format());
    }
  };

  const handleContinue = () => {
    router.push(`/create/${params.id}/video`);
  };

  if (loadingProject) return <SpeechPromptLoading />;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-24">
        <div>
          <SpeechGenderSelector />
          {validationErrors.gender && (
            <p className={errorClassnames}>Please select a gender</p>
          )}
        </div>
        <div>
          <SpeedSelector />
          {validationErrors.speed && (
            <p className={errorClassnames}>Please select a speed value</p>
          )}
        </div>
      </div>
      <div>
        <SpeechInput />
        {validationErrors.speechInput && (
          <p className={errorClassnames}>Speech cannot be empty</p>
        )}
      </div>
      <div className="flex justify-end gap-4">
        <Link href={`/create/${params.id}/avatar`}>
          <Button disabled={generating}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        {generated ? (
          <>
            <Button disabled={generating} type="submit" className="px-8">
              {generating ? "Generating" : "Regenerate"}
              {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
            <Button
              onClick={handleContinue}
              disabled={generating}
              type="button"
              className="px-8"
            >
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </>
        ) : (
          <Button disabled={generating} type="submit" className="px-16">
            {generating ? "Generating" : "Generate"}
            {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
        )}
      </div>
    </form>
  );
};

export default SpeechPrompt;
