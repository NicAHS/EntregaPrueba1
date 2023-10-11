import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'CasoSemestral',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  bundledWebRuntime: false,
  plugins: {
    BarcodeScanner: {
      title: 'Escnaer QR',
      text: 'Porfavor apunte con la camara al codigo QR',
      notAuthorized: "No tienes acceso a la cámara",
      notFound: 'No se ha encontrado la cámara',
      deniedPrompt: 'Por favor gestione los permisos de la apliación para poder usar la cámara del dispositivo',
      unknownError: 'Ha ocurrido un error desconocido'
    }
  }
};

export default config;
