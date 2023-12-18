import { toXML } from "jstoxml";

const json2xml = (
  input: string,
  setOutput: React.Dispatch<React.SetStateAction<string>>
) => {
  const xml = toXML(input);
  setOutput(xml);
};

export const utilFuncs = (
  input: string,
  setOutput: React.Dispatch<React.SetStateAction<string>>
) => {
  json2xml: json2xml(input, setOutput);
};
