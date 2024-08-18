export class CertificateModel {
    id: number = 0;
    certificateName: string = "";
  }

  
export enum Certificate {
    STCWBasicSafetyTraining = 'STCW Basic Safety Training',
    AdvancedFireFighting = 'Advanced Fire Fighting',
    MedicalFirstAid = 'Medical First Aid',
    GMDSSGeneralOperatorsCertificate = 'GMDSS General Operator\'s Certificate',
    BridgeResourceManagement = 'Bridge Resource Management'
  }