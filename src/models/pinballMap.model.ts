export namespace PinballMapNS {
  export interface PinballResponse {
    locations: LocationItemI[];
  }

  export interface LocationItemI {
    id: number;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    lat: string;
    lon: string;
    website: string;
    created_at: string;
    updated_at: string;
    zone_id: number;
    region_id: number;
    location_type_id: number;
    description: any;
    operator_id: any;
    date_last_updated: string;
    last_updated_by_user_id: number;
    is_stern_army: any;
    country: string;
    ic_active: any;
    last_updated_by_username: string;
    num_machines: number;
    location_machine_xrefs: LocationMachineXref[];
  }

  export interface LocationMachineXref {
    id: number;
    location_id: number;
    machine_id: number;
    ic_enabled: any;
    machine: Machine;
  }

  export interface Machine {
    id: number;
    name: string;
    updated_at: string;
    ipdb_link: string;
    year: number;
    manufacturer: string;
    machine_group_id: number;
    ipdb_id: number;
    opdb_id: string;
  }
}