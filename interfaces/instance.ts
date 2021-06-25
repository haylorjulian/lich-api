export interface BaseInstance {
  name: string;
  ip: string;
  service: string;
  targetId: string;
}

export interface Instance extends BaseInstance {
  id: string;
}
