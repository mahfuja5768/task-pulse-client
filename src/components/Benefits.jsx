import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#f0d9d9] py-12"
    >
      <SectionTitle
        dark={"dark"}
        title={"Who Benefits from Our Task Management Platform?"}
      ></SectionTitle>

      <div className="container mx-auto my-8 p-8">
        <div className="pb-5">
          <h2 className="text-2xl font-bold ">For the Busy Professional:</h2>
          <p>
            Are you a professional juggling multiple tasks and deadlines? Our
            task management website is tailored for individuals like you. Stay
            on top of your workload, meet deadlines, and boost your professional
            efficiency.
          </p>
        </div>
        <div className="pb-5">
          <h2 className="text-2xl font-bold ">For the Proactive Student:</h2>
          <p>
            Students, manage your academic responsibilities with ease. Organize
            assignments, projects, and study schedules effortlessly. Stay
            focused on your goals and achieve academic success.
          </p>
        </div>
        <div className="pb-5">
          <h2 className="text-2xl font-bold ">
            For the Entrepreneurial Spirit:
          </h2>
          <p>
            Entrepreneurs and small business owners, streamline your operations.
            From project management to team collaboration, our platform empowers
            you to efficiently run your business, allowing you to focus on
            growth.
          </p>
        </div>
        <div className="pb-5">
          <h2 className="text-2xl font-bold ">
            For the Goal-oriented Freelancer:
          </h2>
          <p>
            Freelancers, take control of your projects. Easily track tasks, set
            milestones, and showcase your productivity. Our task management
            tools are designed to enhance your freelance journey.
          </p>
        </div>
        <div className="pb-5">
          <h2 className="text-2xl font-bold ">
            For Anyone Ready to Take Control:
          </h2>
          <p>
            Our task management platform is for individuals ready to take
            control of their time, tasks, and goals. Start your journey to
            enhanced productivity and a more organized life today.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Benefits;
