export default {
  nodes: [
    {
      id: "A",
      label: "A",
    },
    {
      id: "B",
      label: "B",
    },
    {
      id: "C",
      label: "C",
    },
    {
      id: "D",
      label: "D",
    },
    {
      id: "E",
      label: "E",
    },
    {
      id: "F",
      label: "F",
    },
    {
      id: "G",
      label: "G",
    },
  ],
  edges: [
    {
      source: "A",
      target: "B",
    },
    {
      source: "B",
      target: "C",
    },
    {
      source: "C",
      target: "G",
    },
    {
      source: "A",
      target: "D",
    },
    {
      source: "A",
      target: "E",
    },
    {
      source: "E",
      target: "F",
    },
    {
      source: "F",
      target: "D",
    },
    {
      source: "D",
      target: "G",
    },
  ],
};
