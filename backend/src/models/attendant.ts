export interface Attendant {
    id: number;
    name: string;
    availability: boolean;

    isAvailable: () => {};
}