import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-[#f0e1e1] pt-24 py-12"
    >
      <div className="container mx-auto py-12 px-8">
        <SectionTitle title={"About Task-Pulse"}></SectionTitle>
        <p className="text-gray-700 leading-relaxed my-10">
          Welcome to Your Task Management Platform, where we believe in
          simplifying the way you manage your tasks and achieve your goals. Our
          platform is designed with you in mind, offering intuitive features to
          enhance productivity and organization.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          At Your Task Management Platform, we understand the diverse needs of
          individuals, professionals, students, freelancers, and teams. Our
          mission is to provide a versatile and user-friendly task management
          solution that adapts to your unique workflow.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          What sets us apart is our commitment to simplicity, effectiveness, and
          constant improvement. We are passionate about helping you take control
          of your time and tasks, so you can focus on what truly matters.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Join our community of achievers and experience the difference with
          Your Task Management Platform. Start your journey to enhanced
          productivity and a more organized life today!
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
