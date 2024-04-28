//Old Types
type NodeOld = {
  index: number;
  x: number;
  y: number;
  filling: number;
  name: string;
  color: number;
};
type ConnectionOld = {
  startNodeIndex: number;
  endNodeIndex: number;
  degree: number;
  sign: number;
  strength: number;
};

//New Types
type NodeNew = {
  index: number;
  x: number;
  y: number;
  filling: number;
  name: string;
  color: number;
};
type ConnectionNew = {
  startNodeIndex: number;
  endNodeIndex: number;
  degree: number;
  sign: number;
  color: number;
  balances: [weight: number, treshold: number, allowance: number];
};
