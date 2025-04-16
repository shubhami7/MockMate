import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Transcript for <span className="capitalize">{interview.role}</span>{" "}
          Interview
        </h1>
      </div>
      <hr />
      {feedback?.transcript?.length ? (
        feedback.transcript.map((sentence, index) => (
          <div key={index} className="flex flex-row">
            <p className="font-semibold text-primary-200">
              {sentence.role.charAt(0).toUpperCase() + sentence.role.slice(1)}
              :&nbsp;
            </p>
            <p>{sentence.content}</p>
          </div>
        ))
      ) : (
        <h1>No Transcript Available</h1>
      )}
      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to Dashboard
            </p>
          </Link>
        </Button>
        <Button className="btn-secondary flex-1">
          <Link
            href={`/interview/${id}/feedback`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to Feedback
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default page;
