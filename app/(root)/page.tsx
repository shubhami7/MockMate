import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import robot from "../../public/robot.png";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 maw-w-lg">
          <h2>
            Get Interview Confident with AI-Powered Mock Interviews & Feedback
          </h2>
          <p className="text-lg">Practice on real interview questions</p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start Mock Interview</Link>
          </Button>
        </div>
        <Image
          src={robot}
          alt="robo"
          width={400}
          height={400}
          className="max-md:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven&apos;t taken any mock interviews yet</p> */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take a Mock Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
