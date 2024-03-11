import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Footer from "./Footer";

const Features = () => {
  return (
    <>
      <Box height={300} w={"80%"} m="auto" mt={40}>
        <Box>
          <h1>Features :</h1>
        </Box>
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem bg={"white"} borderLeft={"none"} mt={10}>
              {" "}
              {/* Add borderTop style to remove the top border */}
              <h2>
                <AccordionButton
                  borderTop={"none"}
                  borderLeft={"none"}
                  borderRight="none"
                  bg="white"
                  borderBottom={"1px solid #ccc"}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    bg={"white"}
                    fontSize={15}
                  >
                    Peaceful Atmosphere
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Immerse yourself in a serene environment that fosters deep
                concentration and focused learning. Our library is a sanctuary
                where the pursuit of knowledge is complemented by a calm and
                peaceful ambiance
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mt={20}>
              <h2>
                <AccordionButton
                  borderTop={"none"}
                  borderLeft={"none"}
                  borderRight="none"
                  bg="white"
                  borderBottom={"1px solid #ccc"}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={15}>
                    24X7 Accessbility
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We understand that inspiration can strike at any hour. That's
                why [Your Library Name] is open 24x7, ensuring you have access
                to a dedicated study space whenever you need it.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt={20}>
              <h2>
                <AccordionButton
                  borderTop={"none"}
                  borderLeft={"none"}
                  borderRight="none"
                  bg="white"
                  borderBottom={"1px solid #ccc"}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={15}>
                    Comprehensive study material
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Our library boasts a meticulously arranged collection, featuring
                a blend of competitive exam materials and NCERT books. Whatever
                your academic pursuit, find the resources you need to excel.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt={20}>
              <h2>
                <AccordionButton
                  borderTop={"none"}
                  borderLeft={"none"}
                  borderRight="none"
                  bg="white"
                  borderBottom={"1px solid #ccc"}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={15}>
                    Mineral water facility
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Stay hydrated and refreshed during your study sessions with our
                complimentary mineral water facility. We believe that a
                well-hydrated mind is better equipped for learning.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt={20}>
              <h2>
                <AccordionButton
                  borderTop={"none"}
                  borderLeft={"none"}
                  borderRight="none"
                  bg="white"
                  borderBottom={"1px solid #ccc"}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={15}>
                    Wifi and AC facility
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Stay connected and comfortable with our high-speed Wi-Fi and
                air-conditioned spaces. We provide the technological
                infrastructure needed for a modern and conducive study
                environment.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Features;
