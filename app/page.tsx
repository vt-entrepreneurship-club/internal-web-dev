import Image from "next/image";
import Link from "next/link";
import { Clock, ListTodo, NotebookPen } from "lucide-react";

export default function Home() {
  const cards = [
    {
      icon: <Clock />,
      title: "Focus Sessions",
      description: "Stay on task with customizable, AI-optimized focus blocks.",
    },
    {
      icon: <ListTodo />,
      title: "Task Management",
      description: "Manage to-dos and get more done each day.",
    },
    {
      icon: <NotebookPen />,
      title: "Progress Tracking",
      description: "Visualize your progress and build better habits.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-6xl font-bold text-center w-fit mx-auto mt-20">
        Supercharge Your Productivity with AI-Powered Focus
      </h1>

      <h2 className="text-xl font-semibold w-fit mx-auto mt-10">
        Join the waitlist and be the first to elevate your workday with
        FocusFlow.
      </h2>

      <div className="w-fit mx-auto mt-10">
        <Link
          className="text-xl font-semibold bg-red-500 hover:bg-green-500 px-4 py-2 rounded-md mt-10"
          href="/waitlist"
        >
          Join the Waitlist
        </Link>
      </div>

      <div className="grid grid-cols-3 rounded-md mt-40 gap-36">
        {cards.map((card, index) => {
          return (
            <div className="p-4 rounded-md border border-blue-500" key={index}>
              {card.icon}
              <span className="text-xl font-bold mx-auto">{card.title}</span>

              <p className="mt-4">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
