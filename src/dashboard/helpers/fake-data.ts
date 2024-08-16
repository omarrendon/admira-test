export const CRM_FAKE_DATA = [
  {
    leads: [
      { nombre: "Lead 1", costoAdquisición: 200, valorDeVida: 1000 },
      { nombre: "Lead 2", costoAdquisición: 150, valorDeVida: 750 },
      { nombre: "Lead 3", costoAdquisición: 140, valorDeVida: 700 },
      { nombre: "Lead 4", costoAdquisición: 210, valorDeVida: 1100 },
      { nombre: "Lead 5", costoAdquisición: 190, valorDeVida: 900 },
    ],
    tasaConversión: 0.08,
  },
];

export const ANALYTICS_FAKE_DATA = [
  {
    vistasPagina: [
      { fecha: "2024-08-01", vistas: 300 },
      { fecha: "2024-08-02", vistas: 450 },
      { fecha: "2024-08-03", vistas: 150 },
      { fecha: "2024-08-04", vistas: 250 },
      { fecha: "2024-08-05", vistas: 150 },
    ],
    sesiones: [
      { fecha: "2024-08-01", sesiones: 200, tasaRebote: 0.35 },
      { fecha: "2024-08-02", sesiones: 300, tasaRebote: 0.3 },
      { fecha: "2024-08-03", sesiones: 150, tasaRebote: 0.4 },
      { fecha: "2024-08-04", sesiones: 100, tasaRebote: 0.5 },
      { fecha: "2024-08-05", sesiones: 280, tasaRebote: 0.4 },
    ],
    demografía: {
      edad: [
        { rango: "18-24", porcentaje: 25 },
        { rango: "25-34", porcentaje: 40 },
      ],
      género: [
        { tipo: "hombre", porcentaje: 55 },
        { tipo: "mujer", porcentaje: 45 },
      ],
    },
  },
];
