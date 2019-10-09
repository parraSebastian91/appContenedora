import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

const lvl_online_IF = [
  {
    name: 'Comparativo',
    saldo: {
      name: "Saldos de Posiciones Custodia",
      saldo1: "256.643.975.738,294",
      saldo2:"0,00"
    },
    distribucion: {
      name:"Distribución Cartera",
      saldo1: "8.383.348.937,5565",
      saldo2: "248.260.626.800,737"
    },
    comparativo: {
      name: "Comparativo Pactos",
      saldo1: "249.390.626.800,74",
      saldo2: "249.390.626.800,74"
    },
    grilla: false
  },
  {
    name: 'Q_IF',
    header: [
      {
        name: 'RUT_CLI',
        displayName: 'RUT_CLI',
        type: 'string'
      },
      {
        name: 'SEC_RUT_CLI',
        displayName: 'SEC_RUT_CLI',
        type: 'string'
      },
      {
        name: 'NOMBRE_CLI',
        displayName: 'NOMBRE_CLI',
        type: 'string'
      },
      {
        name: 'NEMO',
        displayName: 'NEMO',
        type: 'string'
      },
      {
        name: 'EMISOR',
        displayName: 'EMISOR',
        type: 'string'
      },
      {
        name: 'FEC_VCTO',
        displayName: 'FEC_VCTO',
        type: 'string'
      },
      {
        name: 'TIPO_REAJ',
        displayName: 'TIPO_REAJ',
        type: 'string'
      },
      {
        name: 'NOMINALES',
        displayName: 'NOMINALES',
        type: 'string'
      },
      {
        name: 'GARANTIAS',
        displayName: 'GARANTIAS',
        type: 'string'
      },
      {
        name: 'CAN_ACTUAL',
        displayName: 'CAN_ACTUAL',
        type: 'string'
      },
      {
        name: 'CAN_COM_PLAZO',
        displayName: 'CAN_COM_PLAZO',
        type: 'string'
      },
      {
        name: 'CAN_GARANTIA',
        displayName: 'CAN_GARANTIA',
        type: 'string'
      },
      {
        name: 'VAL_RESC',
        displayName: 'VAL_RESC',
        type: 'string'
      },
      {
        name: 'VAL_RESC_PLAZO',
        displayName: 'VAL_RESC_PLAZO',
        type: 'string'
      },
      {
        name: 'RELACION',
        displayName: 'RELACION',
        type: 'string'
      },
      {
        name: 'MONTO_ACT_AJUS',
        displayName: 'MONTO_ACT_AJUS',
        type: 'string'
      },
      {
        name: 'TASA_MED_CIE',
        displayName: 'TASA_MED_CIE',
        type: 'string'
      },
      {
        name: 'COD_PER',
        displayName: 'COD_PER',
        type: 'string'
      },
      {
        name: 'TOTAL_CARTERA',
        displayName: 'TOTAL_CARTERA',
        type: 'string'
      },
      {
        name: 'IND_FUNGIBILIDAD',
        displayName: 'IND_FUNGIBILIDAD',
        type: 'string'
      },
      {
        name: 'TIPO_CUENTA_DCV',
        displayName: 'TIPO_CUENTA_DCV',
        type: 'string'
      },
      {
        name: 'SEC_CAR_INVER',
        displayName: 'SEC_CAR_INVER',
        type: 'string'
      },
    ],
    data: [
      {
        RUT_CLI: '76031730-6',
        SEC_RUT_CLI: '0',
        NOMBRE_CLI: 'SOC. DE INV. ASUSPOWER LTDA.',
        NEMO: 'SNADRT131219',
        EMISOR: 'AD RETAIL',
        FEC_VCTO: '2019-12-13',
        TIPO_REAJ: 'NR',
        NOMINALES: '10000000',
        GARANTIAS: '0',
        CAN_ACTUAL: '1',
        CAN_COM_PLAZO: '0',
        CAN_GARANTIA: '0',
        VAL_RESC: '10000000',
        VAL_RESC_PLAZO: '0',
        RELACION: 'TERCERO',
        MONTO_ACT_AJUS: '8917584',
        TASA_MED_CIE: '0,63',
        COD_PER: '2018-05',
        TOTAL_CARTERA: '10000000',
        IND_FUNGIBILIDAD: 'S',
        TIPO_CUENTA_DCV: '0',
        SEC_CAR_INVER: '5849148',
      }
    ],
    grilla: true
  },
  {
    name: 'Q_RF',
    header: [
      {
        name: 'RUT_CLI',
        displayName: 'RUT_CLI',
        type: 'string'
      },
      {
        name: 'SEC_RUT_CLI',
        displayName: 'SEC_RUT_CLI',
        type: 'string'
      },
      {
        name: 'NOMBRE_CLI',
        displayName: 'NOMBRE_CLI',
        type: 'string'
      },
      {
        name: 'NEMO',
        displayName: 'NEMO',
        type: 'string'
      },
      {
        name: 'CAN_CUSTODIA',
        displayName: 'CAN_CUSTODIA',
        type: 'string'
      },
      {
        name: 'CAN_GARANTIA',
        displayName: 'CAN_GARANTIA',
        type: 'string'
      },
      {
        name: 'CAN_VEN_PLAZO',
        displayName: 'CAN_VEN_PLAZO',
        type: 'string'
      },
      {
        name: 'CAN_COM_PLAZO',
        displayName: 'CAN_COM_PLAZO',
        type: 'string'
      },
      {
        name: 'TOTAL_CUSTODIA',
        displayName: 'TOTAL_CUSTODIA',
        type: 'string'
      },
      {
        name: 'PRECIO_MED_CIE',
        displayName: 'PRECIO_MED_CIE',
        type: 'string'
      },
      {
        name: 'RELACION',
        displayName: 'RELACION',
        type: 'string'
      },
      {
        name: 'MONTO_VALORIZ',
        displayName: 'MONTO_VALORIZ',
        type: 'string'
      },
      {
        name: 'TIR_MED_CIE',
        displayName: 'TIR_MED_CIE',
        type: 'string'
      },
      {
        name: 'TIPO_REAJ',
        displayName: 'TIPO_REAJ',
        type: 'string'
      },
      {
        name: 'COD_PER',
        displayName: 'TIPO_REAJ',
        type: 'string'
      },
      {
        name: 'TIPO_CUENTA_DCV',
        displayName: 'TIPO_REAJ',
        type: 'string'
      }
    ],
    data: [
      {
        RUT_CLI: '96612040-1',
        SEC_RUT_CLI: '0',
        NOMBRE_CLI: 'SOCIEDAD INMOBILIARIA EL CONVENTO LIMITADA',
        NEMO: 'BADRT-A',
        CAN_CUSTODIA: '2000',
        CAN_GARANTIA: '0',
        CAN_VEN_PLAZO: '0',
        CAN_COM_PLAZO: '0',
        TOTAL_CUSTODIA: '2000',
        PRECIO_MED_CIE: '103,71',
        RELACION: 'TERCERO',
        MONTO_VALORIZ: '50914801',
        TIR_MED_CIE: '4,18',
        TIPO_REAJ: 'UF',
        COD_PER: '2018-05',
        TIPO_CUENTA_DCV: 'D',
      }
    ],
    grilla: true
  },
  {
    name: 'Q_PACTOS',
    header: [
      {
        name: 'PERIODO',
        displayName: 'PERIODO',
        type: 'string'
      },
      {
        name: 'RUT',
        displayName: 'RUT',
        type: 'string'
      },
      {
        name: 'SEC',
        displayName: 'SEC',
        type: 'string'
      },
      {
        name: 'NOMBRE',
        displayName: 'NOMBRE',
        type: 'string'
      },
      {
        name: 'RELACION',
        displayName: 'RELACION',
        type: 'string'
      },
      {
        name: 'TIPO_COMPROMISO',
        displayName: 'TIPO_COMPROMISO',
        type: 'string'
      },
      {
        name: 'FECHA_OPERACION',
        displayName: 'FECHA_OPERACION',
        type: 'string'
      },
      {
        name: 'ESTADO',
        displayName: 'ESTADO',
        type: 'string'
      },
      {
        name: 'NUMERO_COMPROMISO',
        displayName: 'NUMERO_COMPROMISO',
        type: 'string'
      },
      {
        name: 'NEMO',
        displayName: 'NEMO',
        type: 'string'
      },
      {
        name: 'EMISOR',
        displayName: 'EMISOR',
        type: 'string'
      },
      {
        name: 'NOMINALES',
        displayName: 'NOMINALES',
        type: 'string'
      },
      {
        name: 'MONEDA',
        displayName: 'MONEDA',
        type: 'string'
      },
      {
        name: 'MONTO_INICIAL_CAPITAL',
        displayName: 'MONTO_INICIAL_CAPITAL',
        type: 'string'
      },
      {
        name: 'MONTO_COMPROMISO',
        displayName: 'MONTO_COMPROMISO',
        type: 'string'
      },
      {
        name: 'VALOR_PRESENTE',
        displayName: 'VALOR_PRESENTE',
        type: 'string'
      },
      {
        name: 'FEC_VCTO_COMPROMISO',
        displayName: 'FEC VCTO COMPROMISO',
        type: 'string'
      },
      {
        name: 'FEC_VCTO_INSTRUMENTO',
        displayName: 'FEC VCTO INSTRUMENTO',
        type: 'string'
      },
      {
        name: 'TASA_COMPROMISO',
        displayName: 'TASA_COMPROMISO',
        type: 'string'
      },
      {
        name: 'IND_EMI_CERTIF',
        displayName: 'IND_EMI_CERTIF',
        type: 'string'
      },
      {
        name: 'IND_PAGADO',
        displayName: 'IND_PAGADO',
        type: 'string'
      },
      {
        name: 'IND_TIT_CUST_CLI',
        displayName: 'IND_TIT_CUST_CLI',
        type: 'string'
      },
      {
        name: 'IND_TIT_CUST_CORR',
        displayName: 'IND_TIT_CUST_CORR',
        type: 'string'
      },
      {
        name: 'MERCADO',
        displayName: 'MERCADO',
        type: 'string'
      },
      {
        name: 'sec_car_corr',
        displayName: 'sec_car_corr',
        type: 'string'
      }
    ],
    data: [
      {
        PERIODO: '2018-05',
        RUT: '78166970-9',
        SEC: '0',
        NOMBRE: 'SOC DE INVERSIONES MONTECASINO S.A',
        RELACION: '',
        TIPO_COMPROMISO: 'vrc',
        FECHA_OPERACION: '2018-02-27',
        ESTADO: 'TERMINADO',
        NUMERO_COMPROMISO: '251121',
        NEMO: 'FNBNS-221018',
        EMISOR: 'SCOTIABANK',
        NOMINALES: '13001389',
        MONEDA: 'NR',
        MONTO_INICIAL_CAPITAL: '12729861',
        MONTO_COMPROMISO: '12732789',
        VALOR_PRESENTE: '12733227',
        FEC_VCTO_COMPROMISO: '2018-05-30',
        FEC_VCTO_INSTRUMENTO: '2018-10-22',
        TASA_COMPROMISO: '0,23',
        IND_EMI_CERTIF: 'S',
        IND_PAGADO: 'N',
        IND_TIT_CUST_CLI: 'N',
        IND_TIT_CUST_CORR: 'C',
        MERCADO: 'IF',
        sec_car_corr: '5796652',
      }
    ],
    grilla: true
  },
  {
    name: 'DCV',
    header: [
      {
        name: 'A',
        displayName: 'A',
        type: 'string'
      },
      {
        name: 'B',
        displayName: 'B',
        type: 'string'
      },
      {
        name: 'C',
        displayName: 'C',
        type: 'string'
      },
      {
        name: 'D',
        displayName: 'D',
        type: 'string'
      },
      {
        name: 'E',
        displayName: 'E',
        type: 'string'
      },
      {
        name: 'F',
        displayName: 'F',
        type: 'string'
      },
      {
        name: 'G',
        displayName: 'G',
        type: 'string'
      },
      {
        name: 'H',
        displayName: 'H',
        type: 'string'
      },
      {
        name: 'I',
        displayName: 'I',
        type: 'string'
      },
      {
        name: 'J',
        displayName: 'J',
        type: 'string'
      },
    ],
    data: [
      {
        A: '20180514',
        B: '12114001',
        C: 'AESGENER',
        D: 'ACCION',
        E: 'Unidades',
        F: '18013',
        G: '363411',
        H: '0',
        I: '0',
        J: '0',
      },
    ],
    grilla: true
  },
]

const lvl_Cuadratura_RF = [
  {
    name: 'Resumen',
    saldo: {
      name: "Saldos de Custodia RF",
      saldo1: "19.832.715.973,00",
      saldo2: "50.419.250.340,00"
    },
    distribucion:  {
      name: "Saldos de Cartera RF",
      saldo1: "19.832.715.973,00",
      saldo2: "50.419.250.340,00"
    },
    comparativo: {
      name:  "Comparativo Pactos & Cartera RF & Custodia RF",
      saldo1: "50.419.250.340,00",
      saldo2: "50.419.250.340,00"
    },
    grilla: false
  },
  {
    name: 'Cartera',
    header: [
      {
        name: 'COD_PER',
        displayName: 'COD_PER',
        type: 'string'
      },
      {
        name: 'SEC_CAR_INVER',
        displayName: 'SEC_CAR_INVER',
        type: 'string'
      },
      {
        name: 'RUT_CLI',
        displayName: 'RUT_CLI',
        type: 'string'
      },
      {
        name: 'SEC_RUT_CLI',
        displayName: 'SEC_RUT_CLI',
        type: 'string'
      },
      {
        name: 'NEMO',
        displayName: 'NEMO',
        type: 'string'
      },
      {
        name: 'FEC_INVER',
        displayName: 'FEC_INVER',
        type: 'string'
      },
      {
        name: 'TIPO_FAM',
        displayName: 'TIPO_FAM',
        type: 'string'
      },
      {
        name: 'MONTO_VAL_DISP',
        displayName: 'MONTO_VAL_DISP',
        type: 'string'
      },
      {
        name: 'EMISOR',
        displayName: 'EMISOR',
        type: 'string'
      },
      {
        name: 'TIPO_REAJ',
        displayName: 'TIPO_REAJ',
        type: 'string'
      },
      {
        name: 'CAN_ACTUAL',
        displayName: 'CAN_ACTUAL',
        type: 'string'
      },
      {
        name: 'CAN_COM_PLAZO',
        displayName: 'CAN_COM_PLAZO',
        type: 'string'
      },
      {
        name: 'CAN_GARANTIA',
        displayName: 'CAN_GARANTIA',
        type: 'string'
      },
      {
        name: 'CAN_ORD_VEN',
        displayName: 'CAN_ORD_VEN',
        type: 'string'
      },
      {
        name: 'CAN_TRAMITE_COM',
        displayName: 'CAN_TRAMITE_COM',
        type: 'string'
      },
      {
        name: 'CAN_TRAMITE_VEN',
        displayName: 'CAN_TRAMITE_VEN',
        type: 'string'
      },
      {
        name: 'COD_BOVEDA',
        displayName: 'COD_BOVEDA',
        type: 'string'
      },
      {
        name: 'COD_RESERVA',
        displayName: 'COD_RESERVA',
        type: 'string'
      },
      {
        name: 'FEC_EMI',
        displayName: 'FEC_EMI',
        type: 'string'
      },
      {
        name: 'FEC_RESERVA',
        displayName: 'FEC_RESERVA',
        type: 'string'
      },
      {
        name: 'FEC_VCTO',
        displayName: 'FEC_VCTO',
        type: 'string'
      },
      {
        name: 'FEC_VCTO_COM',
        displayName: 'FEC_VCTO_COM',
        type: 'string'
      },
      {
        name: 'FOLIO_COMP_ADJ',
        displayName: 'FOLIO_COMP_ADJ',
        type: 'string'
      },
      {
        name: 'IND_DIVISIBLE',
        displayName: 'IND_DIVISIBLE',
        type: 'string'
      },
      {
        name: 'IND_ING_CORTES',
        displayName: 'IND_ING_CORTES',
        type: 'string'
      },
      {
        name: 'INT_ACUM_GAN_CP',
        displayName: 'INT_ACUM_GAN_CP',
        type: 'string'
      },
      {
        name: 'INT_ACUM_GAN_VP',
        displayName: 'INT_ACUM_GAN_VP',
        type: 'string'
      },
      {
        name: 'INT_DIA_INV_DIS',
        displayName: 'INT_DIA_INV_DIS',
        type: 'string'
      },
      {
        name: 'MONTO_ACT_AJUS',
        displayName: 'MONTO_ACT_AJUS',
        type: 'string'
      },
      {
        name: 'MONTO_ACUM_COMP',
        displayName: 'MONTO_ACUM_COMP',
        type: 'string'
      },
      {
        name: 'MONTO_ACUM_SPRE',
        displayName: 'MONTO_ACUM_SPRE',
        type: 'string'
      },
      {
        name: 'MONTO_ACUM_VEN',
        displayName: 'MONTO_ACUM_VEN',
        type: 'string'
      },
      {
        name: 'MONTO_CUP',
        displayName: 'MONTO_CUP',
        type: 'string'
      },
      {
        name: 'MONTO_CUP_CP',
        displayName: 'MONTO_CUP_CP',
        type: 'string'
      },
      {
        name: 'MONTO_INI_AJUS',
        displayName: 'MONTO_INI_AJUS',
        type: 'string'
      },
      {
        name: 'MONTO_VAL_DISP_MAS',
        displayName: 'MONTO_VAL_DISP_MAS',
        type: 'string'
      },
      {
        name: 'MONTO_VAL_DISP_MEN',
        displayName: 'MONTO_VAL_DISP_MEN',
        type: 'string'
      },
      {
        name: 'PLAZO',
        displayName: 'PLAZO',
        type: 'string'
      },
      {
        name: 'PRECIO_MED_CIE',
        displayName: 'PRECIO_MED_CIE',
        type: 'string'
      },
      {
        name: 'PRECIO_PROM_COMP',
        displayName: 'PRECIO_PROM_COMP',
        type: 'string'
      },
      {
        name: 'QUIEN_RESERVA',
        displayName: 'QUIEN_RESERVA',
        type: 'string'
      },
      {
        name: 'TIPO_CARTERA',
        displayName: 'TIPO_CARTERA',
        type: 'string'
      },
      {
        name: 'TIPO_COMP_ADJ',
        displayName: 'TIPO_COMP_ADJ',
        type: 'string'
      },
      {
        name: 'TIR_MED_CIE',
        displayName: 'TIR_MED_CIE',
        type: 'string'
      },
      {
        name: 'TIR_PROM_COMP',
        displayName: 'TIR_PROM_COMP',
        type: 'string'
      },
      {
        name: 'VTO_COMP_ADJ',
        displayName: 'VTO_COMP_ADJ',
        type: 'string'
      },
      {
        name: 'CLASIF_RIESGO',
        displayName: 'CLASIF_RIESGO',
        type: 'string'
      },
      {
        name: 'RUT_EMISOR',
        displayName: 'RUT_EMISOR',
        type: 'string'
      },
      {
        name: 'DURATION',
        displayName: 'DURATION',
        type: 'string'
      },
      {
        name: 'SEC_CAR_HISTO',
        displayName: 'SEC_CAR_HISTO',
        type: 'string'
      },
      {
        name: 'ORIGEN_RECURSOS',
        displayName: 'ORIGEN_RECURSOS',
        type: 'string'
      },
      {
        name: 'CLASIF_CARTERA',
        displayName: 'CLASIF_CARTERA',
        type: 'string'
      },
      {
        name: 'CODCATIFRSID',
        displayName: 'CODCATIFRSID',
        type: 'string'
      },
      {
        name: 'TIR_MED_CIE_ANT',
        displayName: 'TIR_MED_CIE_ANT',
        type: 'string'
      },
      {
        name: 'MTO_VAL_DISP_ANT',
        displayName: 'MTO_VAL_DISP_ANT',
        type: 'string'
      },
      {
        name: 'PARIDAD_MORIGEN',
        displayName: 'PARIDAD_MORIGEN',
        type: 'string'
      },
      {
        name: 'CAPTACION_MORIGEN',
        displayName: 'CAPTACION_MORIGEN',
        type: 'string'
      },
      {
        name: 'MON_MORIGEN',
        displayName: 'MON_MORIGEN',
        type: 'string'
      },
      {
        name: 'CAPT_MORIGEN_MCDO',
        displayName: 'CAPT_MORIGEN_MCDO',
        type: 'string'
      },
      {
        name: 'MTO_VAL_TASA_MCDO',
        displayName: 'MTO_VAL_TASA_MCDO',
        type: 'string'
      },
      {
        name: 'MTO_VAL_TASA_COMP',
        displayName: 'MTO_VAL_TASA_COMP',
        type: 'string'
      }
    ],
    data: [
      {
        COD_PER: '',
        SEC_CAR_INVER: '',
        RUT_CLI: '',
        SEC_RUT_CLI: '',
        NEMO: '',
        FEC_INVER: '',
        TIPO_FAM: '',
        MONTO_VAL_DISP: '',
        EMISOR: '',
        TIPO_REAJ: '',
        CAN_ACTUAL: '',
        CAN_COM_PLAZO: '',
        CAN_GARANTIA: '',
        CAN_ORD_VEN: '',
        CAN_TRAMITE_COM: '',
        CAN_TRAMITE_VEN: '',
        COD_BOVEDA: '',
        COD_RESERVA: '',
        FEC_EMI: '',
        FEC_RESERVA: '',
        FEC_VCTO: '',
        FEC_VCTO_COM: '',
        FOLIO_COMP_ADJ: '',
        IND_DIVISIBLE: '',
        IND_ING_CORTES: '',
        INT_ACUM_GAN_CP: '',
        INT_ACUM_GAN_VP: '',
        INT_DIA_INV_DIS: '',
        MONTO_ACT_AJUS: '',
        MONTO_ACUM_COMP: '',
        MONTO_ACUM_SPRE: '',
        MONTO_ACUM_VEN: '',
        MONTO_CUP: '',
        MONTO_CUP_CP: '',
        MONTO_INI_AJUS: '',
        MONTO_VAL_DISP_MAS: '',
        MONTO_VAL_DISP_MEN: '',
        PLAZO: '',
        PRECIO_MED_CIE: '',
        PRECIO_PROM_COMP: '',
        QUIEN_RESERVA: '',
        TIPO_CARTERA: '',
        TIPO_COMP_ADJ: '',
        TIR_MED_CIE: '',
        TIR_PROM_COMP: '',
        VTO_COMP_ADJ: '',
        CLASIF_RIESGO: '',
        RUT_EMISOR: '',
        DURATION: '',
        SEC_CAR_HISTO: '',
        ORIGEN_RECURSOS: '',
        CLASIF_CARTERA: '',
        CODCATIFRSID: '',
        TIR_MED_CIE_ANT: '',
        MTO_VAL_DISP_ANT: '',
        PARIDAD_MORIGEN: '',
        CAPTACION_MORIGEN: '',
        MON_MORIGEN: '',
        CAPT_MORIGEN_MCDO: '',
        MTO_VAL_TASA_MCDO: '',
        MTO_VAL_TASA_COMP: ''
      }
    ],
    grilla: true
  },
  {
    name: 'Custodia',
    header: [
      {
        name: 'RUT_CLI',
        displayName: 'RUT_CLI',
        type: 'string'
      },
      {
        name: 'SEC_RUT_CLI',
        displayName: 'SEC_RUT_CLI',
        type: 'string'
      },
      {
        name: 'NOMBRE_CLI',
        displayName: 'NOMBRE_CLI',
        type: 'string'
      },
      {
        name: 'NEMO',
        displayName: 'NEMO',
        type: 'string'
      },
      {
        name: 'CAN_CUSTODIA',
        displayName: 'CAN_CUSTODIA',
        type: 'string'
      },
      {
        name: 'CAN_GARANTIA',
        displayName: 'CAN_GARANTIA',
        type: 'string'
      },
      {
        name: 'CAN_VEN_PLAZO',
        displayName: 'CAN_VEN_PLAZO',
        type: 'string'
      },
      {
        name: 'CAN_COM_PLAZO',
        displayName: 'CAN_COM_PLAZO',
        type: 'string'
      },
      {
        name: 'TOTAL_CUSTODIA',
        displayName: 'TOTAL_CUSTODIA',
        type: 'string'
      },
      {
        name: 'PRECIO_MED_CIE',
        displayName: 'PRECIO_MED_CIE',
        type: 'string'
      },
      {
        name: 'RELACION',
        displayName: 'RELACION',
        type: 'string'
      },
      {
        name: 'MONTO_VALORIZ',
        displayName: 'MONTO_VALORIZ',
        type: 'string'
      },
      {
        name: 'TIR_MED_CIE',
        displayName: 'TIR_MED_CIE',
        type: 'string'
      },
      {
        name: 'TIPO_REAJ',
        displayName: 'TIPO_REAJ',
        type: 'string'
      },
      {
        name: 'COD_PER',
        displayName: 'COD_PER',
        type: 'string'
      },
      {
        name: 'TIPO_CUENTA_DCV',
        displayName: 'TIPO_CUENTA_DCV',
        type: 'string'
      }

    ],
    data: [
      {
        RUT_CLI: '',
        SEC_RUT_CLI: '',
        NOMBRE_CLI: '',
        NEMO: '',
        CAN_CUSTODIA: '',
        CAN_GARANTIA: '',
        CAN_VEN_PLAZO: '',
        CAN_COM_PLAZO: '',
        TOTAL_CUSTODIA: '',
        PRECIO_MED_CIE: '',
        RELACION: '',
        MONTO_VALORIZ: '',
        TIR_MED_CIE: '',
        TIPO_REAJ: '',
        COD_PER: '',
        TIPO_CUENTA_DCV: '',
      }
    ],
    grilla: true
  },
  {
    name: 'Q_PACTOS',
    header: [
      {
        name: 'PERIODO',
        displayName: 'PERIODO',
        type: 'string'
      },
      {
        name: 'RUT',
        displayName: 'RUT',
        type: 'string'
      },
      {
        name: 'SEC',
        displayName: 'SEC',
        type: 'string'
      },
      {
        name: 'NOMBRE',
        displayName: 'NOMBRE',
        type: 'string'
      },
      {
        name: 'RELACION',
        displayName: 'RELACION',
        type: 'string'
      },
      {
        name: 'TIPO_COMPROMISO',
        displayName: 'TIPO_COMPROMISO',
        type: 'string'
      },
      {
        name: 'FECHA_OPERACION',
        displayName: 'FECHA_OPERACION',
        type: 'string'
      },
      {
        name: 'ESTADO',
        displayName: 'ESTADO',
        type: 'string'
      },
      {
        name: 'NUMERO_COMPROMISO',
        displayName: 'NUMERO_COMPROMISO',
        type: 'string'
      },
      {
        name: 'NEMO',
        displayName: 'NEMO',
        type: 'string'
      },
      {
        name: 'EMISOR',
        displayName: 'EMISOR',
        type: 'string'
      },
      {
        name: 'NOMINALES',
        displayName: 'NOMINALES',
        type: 'string'
      },
      {
        name: 'MONEDA',
        displayName: 'MONEDA',
        type: 'string'
      },
      {
        name: 'MONTO_INICIAL_CAPITAL',
        displayName: 'MONTO_INICIAL_CAPITAL',
        type: 'string'
      },
      {
        name: 'MONTO_COMPROMISO',
        displayName: 'MONTO_COMPROMISO',
        type: 'string'
      },
      {
        name: 'VALOR_PRESENTE',
        displayName: 'VALOR_PRESENTE',
        type: 'string'
      },
      {
        name: 'FEC_VCTO_COMPROMISO',
        displayName: 'FEC_VCTO_COMPROMISO',
        type: 'string'
      },
      {
        name: 'FEC_VCTO_INSTRUMENTO',
        displayName: 'FEC_VCTO_INSTRUMENTO',
        type: 'string'
      },
      {
        name: 'TASA_COMPROMISO',
        displayName: 'TASA_COMPROMISO',
        type: 'string'
      },
      {
        name: 'IND_EMI_CERTIF',
        displayName: 'IND_EMI_CERTIF',
        type: 'string'
      },
      {
        name: 'IND_PAGADO',
        displayName: 'IND_PAGADO',
        type: 'string'
      },
      {
        name: 'IND_TIT_CUST_CLI',
        displayName: 'IND_TIT_CUST_CLI',
        type: 'string'
      },
      {
        name: 'IND_TIT_CUST_CORR',
        displayName: 'IND_TIT_CUST_CORR',
        type: 'string'
      },
      {
        name: 'MERCADO',
        displayName: 'MERCADO',
        type: 'string'
      },
      {
        name: 'sec_car_corr',
        displayName: 'sec_car_corr',
        type: 'string'
      },
    ],
    data: [
      {
        PERIODO: '',
        RUT: '',
        SEC: '',
        NOMBRE: '',
        RELACION: '',
        TIPO_COMPROMISO: '',
        FECHA_OPERACION: '',
        ESTADO: '',
        NUMERO_COMPROMISO: '',
        NEMO: '',
        EMISOR: '',
        NOMINALES: '',
        MONEDA: '',
        MONTO_INICIAL_CAPITAL: '',
        MONTO_COMPROMISO: '',
        VALOR_PRESENTE: '',
        FEC_VCTO_COMPROMISO: '',
        FEC_VCTO_INSTRUMENTO: '',
        TASA_COMPROMISO: '',
        IND_EMI_CERTIF: '',
        IND_PAGADO: '',
        IND_TIT_CUST_CLI: '',
        IND_TIT_CUST_CORR: '',
        MERCADO: '',
        sec_car_corr: '',
      },
    ],
    grilla: true
  }
]

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})

export class GridViewComponent implements OnInit {

  faFileExcel = faFileExcel;
  Proceso;
  grid_type;
  tabs_OLRF;
  isRF= false

  constructor(private rutaActiva: ActivatedRoute) {
    this.grid_type = this.rutaActiva.snapshot.params.name
  }

  ngOnInit() {
    switch (this.grid_type) {
      case "cuadratura_online":
        this.Proceso = "Cuadratura Online"
        this.isRF = false
        this.tabs_OLRF = lvl_online_IF
        break;
      case "cuadratura_rf":
        this.Proceso = "Cuadratura RF"
        this.isRF = true
        this.tabs_OLRF = lvl_Cuadratura_RF
        break;
    }
  }

}
