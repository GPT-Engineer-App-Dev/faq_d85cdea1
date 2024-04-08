import React from "react";
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box maxWidth="800px" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Frequently Asked Questions
      </Heading>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I place an order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>To place an order, simply browse our products, add items to your cart, and proceed to checkout. Fill in your shipping and payment details to complete the order.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What payment methods do you accept?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>We accept Visa, Mastercard, American Express, Discover, and PayPal.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How long does shipping take?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Shipping times vary depending on your location. Typically, orders within the US take 3-5 business days. International orders can take up to 2-3 weeks. Expedited shipping options are available at checkout.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>We accept returns within 30 days of delivery. Items must be in new, unused condition with all original packaging. Some exclusions apply. Please see our full Return Policy for details.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Index;
