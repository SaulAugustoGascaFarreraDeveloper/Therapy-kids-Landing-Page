import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

interface ContactData {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  email: string;
  condition: string;
  message: string;
}

const EXCEL_FILE_PATH = path.join(process.cwd(), 'data', 'contacts.xlsx');

function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function getConditionLabel(condition: string): string {
  const conditions: Record<string, string> = {
    'sindrome-down': 'Síndrome de Down',
    'autismo': 'Trastorno del Espectro Autista',
    'tdah': 'TDAH',
    'retraso-lenguaje': 'Retraso del Lenguaje',
    'retraso-psicomotor': 'Retraso Psicomotor',
    'sin-diagnostico': 'Sin diagnóstico aún',
    'otro': 'Otro',
  };
  return conditions[condition] || condition || 'No especificado';
}

// export async function POST(request: NextRequest) {
//   try {
//     const data: ContactData = await request.json();

//     // Validate required fields
//     if (!data.parentName || !data.childName || !data.childAge || !data.phone || !data.email) {
//       return NextResponse.json(
//         { error: 'Faltan campos requeridos' },
//         { status: 400 }
//       );
//     }

//     ensureDataDirectory();

//     // Prepare the new row
//     const newRow = {
//       'Fecha': new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }),
//       'Nombre del Padre/Tutor': data.parentName,
//       'Nombre del Niño(a)': data.childName,
//       'Edad del Niño(a)': data.childAge,
//       'Teléfono': data.phone,
//       'Correo Electrónico': data.email,
//       'Condición/Diagnóstico': getConditionLabel(data.condition),
//       'Mensaje': data.message || 'Sin mensaje adicional',
//     };

//     let workbook: XLSX.WorkBook;
//     let worksheet: XLSX.WorkSheet;
//     const existingData: Record<string, string>[] = [];

//     // Check if file exists
//     if (fs.existsSync(EXCEL_FILE_PATH)) {
//       // Read existing file
//       workbook = XLSX.readFile(EXCEL_FILE_PATH);
//       const sheetName = workbook.SheetNames[0];
//       worksheet = workbook.Sheets[sheetName];

//       // Get existing data
//       const jsonData = XLSX.utils.sheet_to_json(worksheet) as Record<string, string>[];
//       existingData.push(...jsonData);
//     }

//     // Add new row
//     existingData.push(newRow);

//     // Create new worksheet with all data
//     worksheet = XLSX.utils.json_to_sheet(existingData);

//     // Set column widths
//     worksheet['!cols'] = [
//       { wch: 20 }, // Fecha
//       { wch: 30 }, // Nombre del Padre/Tutor
//       { wch: 25 }, // Nombre del Niño(a)
//       { wch: 15 }, // Edad del Niño(a)
//       { wch: 15 }, // Teléfono
//       { wch: 30 }, // Correo Electrónico
//       { wch: 30 }, // Condición/Diagnóstico
//       { wch: 50 }, // Mensaje
//     ];

//     // Create workbook and add worksheet
//     workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Contactos');

//     // Write to file
//     XLSX.writeFile(workbook, EXCEL_FILE_PATH);

//     return NextResponse.json(
//       { message: 'Datos guardados exitosamente', success: true },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     return NextResponse.json(
//       { error: 'Error al guardar los datos' },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: NextRequest) {
  try {

    const data: ContactData = await request.json();

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEETS_URL;

    console.log("URL:", GOOGLE_SCRIPT_URL);

    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();

    console.log("GOOGLE RESPONSE:");
    console.log(text);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {

    console.log("API ERROR:");
    console.log(error);

    return NextResponse.json(
      { error: "Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(EXCEL_FILE_PATH)) {
      return NextResponse.json(
        { data: [], message: 'No hay contactos registrados aún' },
        { status: 200 }
      );
    }

    const workbook = XLSX.readFile(EXCEL_FILE_PATH);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return NextResponse.json(
      { data: jsonData, count: jsonData.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error reading contacts:', error);
    return NextResponse.json(
      { error: 'Error al leer los datos' },
      { status: 500 }
    );
  }
}
