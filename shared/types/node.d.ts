import { INode } from 'libs/nodes';
import { StaticNetworkIds } from './network';
import { StaticNodesState, CustomNodesState } from 'reducers/config/nodes';

interface CustomNodeConfig {
  id: string;
  isCustom: true;
  name: string;
  lib: INode;
  service: 'your custom node';
  url: string;
  network: string;
  auth?: {
    username: string;
    password: string;
  };
}

interface StaticNodeConfig {
  isCustom: false;
  network: StaticNetworkIds;
  lib: INode;
  service: string;
  estimateGas?: boolean;
  hidden?: boolean;
}

declare enum StaticNodeId {
  ETH_AUTO = 'eth_auto',
  ETH_MYCRYPTO = 'eth_mycrypto',
  ETH_ETHSCAN = 'eth_ethscan',
  ETH_INFURA = 'eth_infura',
  ETH_BLOCKSCALE = 'eth_blockscale',
  ROP_AUTO = 'rop_auto',
  ROP_INFURA = 'rop_infura',
  KOV_AUTO = 'kov_auto',
  KOV_ETHSCAN = 'kov_ethscan',
  RIN_AUTO = 'rin_auto',
  RIN_ETHSCAN = 'rin_ethscan',
  RIN_INFURA = 'rin_infura',
  ETC_AUTO = 'etc_auto',
  ETC_EPOOL = 'etc_epool',
  UBQ_AUTO = 'ubq_auto',

  UBQ = 'ubq',
  EXP_AUTO = 'exp_auto',
  EXP_TECH = 'exp_tech'
}

type StaticNodeConfigs = { [key in StaticNodeId]: StaticNodeConfig } & { web3?: StaticNodeConfig };

type NodeConfig = StaticNodesState[StaticNodeId] | CustomNodesState[string];
