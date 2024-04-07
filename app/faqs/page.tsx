import GoBack from "@/components/ui/GoBack";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="px-20 pt-8">
      <GoBack />
      <div className="p-8 px-32">
        <div className="font-bold py-4 flex items-center justify-between">
          <h1 className="text-5xl">Faqs</h1>
          <h1 className="text-6xl">?</h1>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Enigma AI?</AccordionTrigger>
            <AccordionContent>
              Enigma AI is a cutting-edge system that utilizes AI-driven image
              generation, speech synthesis, and lip-syncing technologies to
              create realistic and customizable video content. It features a
              user-friendly web interface for specifying character attributes,
              inputting speech text, and managing video projects. The system is
              designed with modularity and flexibility to allow for updates and
              improvements to its components without impacting the overall
              functionality.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What are the core components of Enigma AI?
            </AccordionTrigger>
            <AccordionContent>
              Image Generation Module: Utilizes deep learning models, including
              openai's APIs, to create customizable human-like images based on
              user specifications such as gender, ethnicity, and hair color.
              Speech Synthesis Module: Converts user-provided text into
              natural-sounding speech using advanced NLP and openai's
              text-to-speech technologies. Lip-Sync Technology: Ensures perfect
              synchronization of the character's lip movements with the
              synthesized speech, employing machine learning models specifically
              trained for lip-sync accuracy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How can I use Enigma AI to create videos?
            </AccordionTrigger>
            <AccordionContent>
              Enigma AI provides a user-friendly web interface where you can
              specify character attributes, input speech text, and manage your
              video projects. Simply follow the intuitive steps to create
              lifelike characters, generate natural-sounding speech, and produce
              synchronized video content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What customization options are available for character generation?
            </AccordionTrigger>
            <AccordionContent>
              Users can customize various attributes of the digital characters,
              including gender, ethnicity, hair color, and more, using Enigma
              AI's intuitive interface.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I preview the generated characters and synthesized speech
              before finalizing the video?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Enigma AI allows users to preview the generated characters
              and listen to the synthesized speech before proceeding to generate
              the full video content. This feature enables adjustments and
              refinements to ensure the output meets your expectations.
            </AccordionContent>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How can I manage my video projects on the Enigma AI platform?
              </AccordionTrigger>
              <AccordionContent>
                The Enigma AI platform offers tools for managing video projects,
                including specifying character attributes, inputting speech
                text, and previewing the generated content before finalizing the
                video. Users can easily manage and refine their projects within
                the web interface.
              </AccordionContent>
            </AccordionItem>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What is the token usage in Enigma AI?
            </AccordionTrigger>
            <AccordionContent>
              In Enigma AI, users' tokens are utilized for character generation,
              voice generation, and video generation. The tokens provide access
              to the system's functionalities, allowing users to create digital
              characters, generate speech from text inputs, and produce the
              final synchronized video content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
