export interface Navigator {
    navigate(start:string, end:string): string;
}

export interface Driver{
    name: string;
    drive(start: string, end: string): string;
}

export interface Lawyer {
    goToCourt(end: string): void;
}