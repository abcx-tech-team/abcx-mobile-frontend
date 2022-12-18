import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Accordion from '../common/Accordion';
import { sizes } from '../../utils';

const accordionData = [
  {
    title: 'What is ABCXchange?',
    data: "ABCXchange helps you connect with the right members at the time. If you raising, then you get connected to verified investors and if you looking opportunities, then get to explore and connect to a list of modern businesses. That's it. That's all we do.",
  },
  {
    title: 'Can I add my colleagues?',
    data: 'Yes. absolutely. You can request for membership using key person’s name and then add as many users as you want within that membership.',
  },
  {
    title: 'Is it free?',
    data: 'Currently, the registration on our platform is absolutely free, no asterisks.',
  },
];

const DashboardAccordionContainer = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <View style={styles.accordionContainer}>
      <Text style={styles.heading}>FAQs</Text>
      {accordionData.map((item, index) => (
        <Accordion
          key={item.title}
          {...item}
          expanded={index === expanded}
          setExpanded={setExpanded}
          index={index}
        />
      ))}
    </View>
  );
};

export default DashboardAccordionContainer;

const styles = StyleSheet.create({
  accordionContainer: {
    marginTop: sizes.p3,
    paddingHorizontal: sizes.p2,
  },
  heading: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: sizes.p3,
  },
});
