export const BranColumn: string[] = [
  //DisblayColumns
  'id',
  'name',
  'ip',
  'countPc',
  'tools',
];
export interface BranchModel {
  name: string;
  id: number;
  ip: string;
  countPc: number;
  receiptPrinter: number;
  barcode: number;
  psSader: number;
  psWared: number;
  detail: string;
  note: string;
}
