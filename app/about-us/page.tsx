import GoBack from "@/components/ui/GoBack";

const AboutUs = () => {
  return (
    <div className="pl-20 pt-8">
      <GoBack />
      <div className="p-8 px-32">
        <h1 className="text-5xl font-bold py-4">About Us</h1>
        <p>
          Welcome to Enigma AI, where creativity meets technology to redefine
          the way videos are created. Our platform integrates cutting-edge
          AI-driven image generation, speech synthesis, and lip-syncing
          technologies to empower users to produce realistic and customizable
          video content effortlessly.
        </p>
        <div>
          <div className="my-12">
            <h1 className="mb-4 text-2xl font-semibold">Our Mission</h1>
            <p>
              At Enigma AI, our mission is to provide users with a powerful and
              user-friendly tool that democratizes the creation of high-quality
              videos. We believe in leveraging advanced AI technologies to
              enable both technical and non-technical users to bring their
              creative visions to life through lifelike characters and
              synchronized speech.
            </p>
          </div>
          <div className="my-12">
            <h1 className="mb-4 text-2xl font-semibold">What We Offer</h1>
            <p>
              Enigma AI offers a state-of-the-art web-based platform that allows
              users to specify character attributes, input speech text, and
              manage their video projects with ease. Through our intuitive
              interface, users can customize digital characters, generate
              natural-sounding speech, and preview the final synchronized video
              content before production.
            </p>
          </div>
          <div className="my-12">
            <h1 className="mb-4 text-2xl font-semibold">Our Commitment</h1>
            <p>
              We are committed to continuously enhancing Enigma AI, ensuring
              that it remains at the cutting edge of technology. Our team is
              dedicated to providing a seamless and user-friendly experience,
              with a focus on user empowerment, innovation, and creativity.
            </p>
          </div>

          <div className="my-12">
            <h1 className="mb-4 text-2xl font-semibold">Get in Touch</h1>
            <p>
              We are excited to be a part of your video creation journey. If you
              have any questions, feedback, or suggestions, please feel free to
              reach out. Your input is invaluable as we continue to refine and
              expand the capabilities of Enigma AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
