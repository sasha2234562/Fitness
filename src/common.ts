interface FontProps {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    Fmin: number;
    Fmax: number;
}

export const font = ({
                         family,
                         weight,
                         color,
                         lineHeight,
                         Fmin,
                         Fmax,
                     }: FontProps) => `
font-family: ${family || 'PT Root UI,sans-serif'};
font-weight: ${weight || '700'};
color: ${color || 'rgb(45, 50, 66)'};
line-height: ${{lineHeight} || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;