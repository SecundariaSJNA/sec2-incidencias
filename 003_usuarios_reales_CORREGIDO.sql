-- ============================================================
-- SEC2-INCIDENCIAS
-- 003_usuarios_reales.sql
-- Carga definitiva de usuarios reales
-- Fuente: usuarios_sec2_maestro_corregido.csv
-- ============================================================

-- IMPORTANTE: ejecutar después de 001_schema_inicial.sql y 002_auth_login.sql.

-- Eliminar usuario temporal de prueba si existe.
delete from public.usuarios where id_acceso = 'DIR001';

select crear_usuario_sec2(
  'M001',
  'ESAGRE',
  'Esteban',
  'Aguilar',
  'Reyes',
  'Aguilar Reyes',
  null,
  'docente',
  'V',
  'EAR1234'
);

select crear_usuario_sec2(
  'M002',
  'MAAGRE',
  'Magdaleno',
  'Aguilar',
  'Reyes',
  'Aguilar Reyes',
  null,
  'docente',
  'M',
  'MAR1234'
);

select crear_usuario_sec2(
  'M003',
  'MAAGDI',
  'Maricruz',
  'Aguirre',
  'Díaz',
  'Aguirre Díaz',
  null,
  'docente',
  'M',
  'MAD1234'
);

select crear_usuario_sec2(
  'M004',
  'IRARMA',
  'Irma Juana',
  'Argueta',
  'Maya',
  'Argueta Maya',
  null,
  'docente',
  'V',
  'IAM1234'
);

select crear_usuario_sec2(
  'M005',
  'YAARMA',
  'Yadira Adriana',
  'Argueta',
  'Maya',
  'Argueta Maya',
  null,
  'docente',
  'M',
  'YAM1234'
);

select crear_usuario_sec2(
  'D002',
  'NIARGA',
  'Nicolás',
  'Arreola',
  'García',
  'Arreola García',
  null,
  'direccion',
  'A',
  'NAG1234'
);

select crear_usuario_sec2(
  'M006',
  'ALAVFI',
  'Alicia',
  'Ávila',
  'Figueroa',
  'Ávila Figueroa',
  null,
  'docente',
  'V',
  'AAF1234'
);

select crear_usuario_sec2(
  'M007',
  'JOAVSO',
  'José Luis',
  'Avilés',
  'Soto',
  'Avilés Soto',
  null,
  'docente',
  'A',
  'JAS1234'
);

select crear_usuario_sec2(
  'M008',
  'LIAYCI',
  'Lilia',
  'Ayala',
  'Cisneros',
  'Ayala Cisneros',
  null,
  'docente',
  'M',
  'LAC1234'
);

select crear_usuario_sec2(
  'M009',
  'ARBALE',
  'Arturo',
  'Barrera',
  'Leyva',
  'Barrera Leyva',
  null,
  'docente',
  'A',
  'ABL1234'
);

select crear_usuario_sec2(
  'P002',
  'NACATR',
  'Natividad Natalia',
  'Cabañas',
  'Trigo',
  'Cabañas Trigo',
  null,
  'prefectura',
  'M',
  'NCT1234'
);

select crear_usuario_sec2(
  'M010',
  'JOCASA',
  'Jorge Alejandro',
  'Camacho',
  'Santos',
  'Camacho Santos',
  null,
  'docente',
  'M',
  'JCS1234'
);

select crear_usuario_sec2(
  'M011',
  'JUCASA',
  'Juan',
  'Camacho',
  'Santos',
  'Camacho Santos',
  null,
  'docente',
  'A',
  'JCS1234'
);

select crear_usuario_sec2(
  'M012',
  'ALCAPE',
  'Alejandro',
  'Carrillo',
  'Pérez',
  'Carrillo Pérez',
  null,
  'docente',
  'A',
  'ACP1234'
);

select crear_usuario_sec2(
  'P004',
  'J.CASO',
  'J. Antonio',
  'Castro',
  'Soto',
  'Castro Soto',
  null,
  'prefectura',
  'M',
  'JCS1234'
);

select crear_usuario_sec2(
  'M013',
  'SUCHHE',
  'Susana',
  'Chávez',
  'Hernández',
  'Chávez Hernández',
  null,
  'docente',
  'V',
  'SCH1234'
);

select crear_usuario_sec2(
  'M014',
  'OFCIVA',
  'Ofelia Elizabeth',
  'Cisneros',
  'Valdez',
  'Cisneros Valdez',
  null,
  'docente',
  'A',
  'OCV1234'
);

select crear_usuario_sec2(
  'M015',
  'EDCOGA',
  'Edgar Iván',
  'Colín',
  'García',
  'Colín García',
  null,
  'docente',
  'M',
  'ECG1234'
);

select crear_usuario_sec2(
  'M016',
  'MACOSI',
  'María De Los Ángeles',
  'Coronel',
  'Silva',
  'Coronel Silva',
  null,
  'docente',
  'A',
  'MCS1234'
);

select crear_usuario_sec2(
  'M017',
  'KACOFL',
  'Karla Elizabeth',
  'Cortés',
  'Flores',
  'Cortés Flores',
  null,
  'docente',
  'V',
  'KCF1234'
);

select crear_usuario_sec2(
  'C002',
  'FACRDU',
  'Fany',
  'Cruz',
  'Duarte',
  'Cruz Duarte',
  null,
  'correspondencia',
  'M',
  'FCD1234'
);

select crear_usuario_sec2(
  'M018',
  'ORCRSA',
  'Orlando',
  'Cruz',
  'Sánchez',
  'Cruz Sánchez',
  null,
  'docente',
  'A',
  'OCS1234'
);

select crear_usuario_sec2(
  'M019',
  'LIDEDE',
  'Linda Crystal',
  'Delgado',
  'Delgado',
  'Delgado Delgado',
  null,
  'docente',
  'V',
  'LDD1234'
);

select crear_usuario_sec2(
  'M020',
  'SADIAL',
  'Samuel',
  'Díaz',
  'Alatorre',
  'Díaz Alatorre',
  null,
  'docente',
  'M',
  'SDA1234'
);

select crear_usuario_sec2(
  'M021',
  'JODOSO',
  'José Arturo',
  'Domínguez',
  'Soto',
  'Domínguez Soto',
  null,
  'docente',
  'V',
  'JDS1234'
);

select crear_usuario_sec2(
  'M022',
  'DIECGU',
  'Diana',
  'Echeverría',
  'Guillén',
  'Echeverría Guillén',
  null,
  'docente',
  'V',
  'DEG1234'
);

select crear_usuario_sec2(
  'M023',
  'ELESVI',
  'Elizabeth',
  'Espinosa',
  'Vilchis',
  'Espinosa Vilchis',
  null,
  'docente',
  'A',
  'EEV1234'
);

select crear_usuario_sec2(
  'P005',
  'JOESMO',
  'Joseph Michael',
  'Esquivel',
  'Mondragón',
  'Esquivel Mondragón',
  null,
  'prefectura',
  'M',
  'JEM1234'
);

select crear_usuario_sec2(
  'M024',
  'ANESPE',
  'Ana Margarita',
  'Esquivel',
  'Pérez',
  'Esquivel Pérez',
  null,
  'docente',
  'A',
  'AEP1234'
);

select crear_usuario_sec2(
  'M025',
  'GAFLCO',
  'Gabriel Alejandro',
  'Flores',
  'Coria',
  'Flores Coria',
  null,
  'docente',
  'A',
  'GFC1234'
);

select crear_usuario_sec2(
  'M026',
  'JOFLCO',
  'Jorge Rodrigo',
  'Flores',
  'Corona',
  'Flores Corona',
  null,
  'docente',
  'M',
  'JFC1234'
);

select crear_usuario_sec2(
  'M027',
  'FEGAHE',
  'Feliciano',
  'Gama',
  'Hernández',
  'Gama Hernández',
  null,
  'docente',
  'V',
  'FGH1234'
);

select crear_usuario_sec2(
  'D001',
  'BRGAJU',
  'Braulio David',
  'García',
  'Juárez',
  'García Juárez',
  null,
  'direccion',
  'A',
  'BGJ1234'
);

select crear_usuario_sec2(
  'M028',
  'JAGAJU',
  'Jaime Miguel',
  'García',
  'Juárez',
  'García Juárez',
  null,
  'docente',
  'A',
  'JGJ1234'
);

select crear_usuario_sec2(
  'M029',
  'OSGAJU',
  'Oscar Giovanni',
  'García',
  'Juárez',
  'García Juárez',
  null,
  'docente',
  'V',
  'OGJ1234'
);

select crear_usuario_sec2(
  'M030',
  'J.GALE',
  'J. Remedios',
  'García',
  'Leyva',
  'García Leyva',
  null,
  'docente',
  'M',
  'JGL1234'
);

select crear_usuario_sec2(
  'M031',
  'BLGAME',
  'Blanca Estela',
  'García',
  'Medina',
  'García Medina',
  null,
  'docente',
  'V',
  'BGM1234'
);

select crear_usuario_sec2(
  'M032',
  'GEGAME',
  'Gerardo',
  'García',
  'Medina',
  'García Medina',
  null,
  'docente',
  'A',
  'GGM1234'
);

select crear_usuario_sec2(
  'M033',
  'MAGAME',
  'Martha Elena',
  'García',
  'Medina',
  'García Medina',
  null,
  'docente',
  'V',
  'MGM1234'
);

select crear_usuario_sec2(
  'M034',
  'YOGAME',
  'Yolanda',
  'García',
  'Medina',
  'García Medina',
  null,
  'docente',
  'A',
  'YGM1234'
);

select crear_usuario_sec2(
  'M035',
  'GAGAMO',
  'Gabriel',
  'García',
  'Mora',
  'García Mora',
  null,
  'docente',
  'A',
  'GGM1234'
);

select crear_usuario_sec2(
  'M036',
  'CYGARA',
  'Cynthia Wendoline',
  'García',
  'Ramírez',
  'García Ramírez',
  null,
  'docente',
  'A',
  'CGR1234'
);

select crear_usuario_sec2(
  'M037',
  'GAGALO',
  'Gabriel',
  'Garduño',
  'López',
  'Garduño López',
  null,
  'docente',
  'V',
  'GGL1234'
);

select crear_usuario_sec2(
  'M038',
  'EDGAMA',
  'Eduardo',
  'Garduño',
  'Marín',
  'Garduño Marín',
  null,
  'docente',
  'V',
  'EGM1234'
);

select crear_usuario_sec2(
  'M039',
  'PAGAMA',
  'Pablo Edgar',
  'Garduño',
  'Maya',
  'Garduño Maya',
  null,
  'docente',
  'V',
  'PGM1234'
);

select crear_usuario_sec2(
  'M040',
  'ALGOBL',
  'Alejandro',
  'Gómez',
  'Blanco',
  'Gómez Blanco',
  null,
  'docente',
  'A',
  'AGB1234'
);

select crear_usuario_sec2(
  'M041',
  'JOGORE',
  'José Densy',
  'Gómez',
  'Reyes',
  'Gómez Reyes',
  null,
  'docente',
  'V',
  'JGR1234'
);

select crear_usuario_sec2(
  'M042',
  'DAGOMO',
  'Daniel',
  'González',
  'Monroy',
  'González Monroy',
  null,
  'docente',
  'V',
  'DGM1234'
);

select crear_usuario_sec2(
  'M043',
  'ZOGORI',
  'Zoila',
  'González',
  'Rivera',
  'González Rivera',
  null,
  'docente',
  'V',
  'ZGR1234'
);

select crear_usuario_sec2(
  'M044',
  'CAGOSO',
  'Carmen Isabel',
  'González',
  'Solís',
  'González Solís',
  null,
  'docente',
  'A',
  'CGS1234'
);

select crear_usuario_sec2(
  'M045',
  'JEGUAL',
  'Jessica Alejandra',
  'Gudiño',
  'Alatorre',
  'Gudiño Alatorre',
  null,
  'docente',
  'M',
  'JGA1234'
);

select crear_usuario_sec2(
  'M046',
  'LAGUQU',
  'Laura',
  'Guerrero',
  'Quintana',
  'Guerrero Quintana',
  null,
  'docente',
  'V',
  'LGQ1234'
);

select crear_usuario_sec2(
  'M047',
  'NOGUQU',
  'Noemí Alejandra',
  'Guerrero',
  'Quintana',
  'Guerrero Quintana',
  null,
  'docente',
  'A',
  'NGQ1234'
);

select crear_usuario_sec2(
  'M048',
  'GUHOCR',
  'Guillermo Ernesto',
  'Hope',
  'Cruz',
  'Hope Cruz',
  null,
  'docente',
  'A',
  'GHC1234'
);

select crear_usuario_sec2(
  'M049',
  'ESJIOL',
  'Esveide',
  'Jiménez',
  'Olivares',
  'Jiménez Olivares',
  null,
  'docente',
  'A',
  'EJO1234'
);

select crear_usuario_sec2(
  'C001',
  'ALLONA',
  'Alma Daniela',
  'Loza',
  'Nateras',
  'Loza Nateras',
  null,
  'correspondencia',
  'V',
  'ALN1234'
);

select crear_usuario_sec2(
  'M050',
  'SOMAEC',
  'Sonia',
  'Marín',
  'Echeverría',
  'Marín Echeverría',
  null,
  'docente',
  'M',
  'SME1234'
);

select crear_usuario_sec2(
  'M051',
  'MAMAVA',
  'Martha Olivia',
  'Martínez',
  'Vázquez',
  'Martínez Vázquez',
  null,
  'docente',
  'A',
  'MMV1234'
);

select crear_usuario_sec2(
  'M052',
  'OLMARO',
  'Olga',
  'Maya',
  'Rodríguez',
  'Maya Rodríguez',
  null,
  'docente',
  'V',
  'OMR1234'
);

select crear_usuario_sec2(
  'M053',
  'OSMEUR',
  'Oscar',
  'Mejía',
  'Urquiza',
  'Mejía Urquiza',
  null,
  'docente',
  'M',
  'OMU1234'
);

select crear_usuario_sec2(
  'M054',
  'ERMIAR',
  'Eric Rodolfo',
  'Miranda',
  'Arteaga',
  'Miranda Arteaga',
  null,
  'docente',
  'A',
  'EMA1234'
);

select crear_usuario_sec2(
  'M055',
  'LUMIAR',
  'Luis Enrique',
  'Miranda',
  'Arteaga',
  'Miranda Arteaga',
  null,
  'docente',
  'A',
  'LMA1234'
);

select crear_usuario_sec2(
  'M056',
  'JOMONA',
  'Jose Antonio',
  'Mondragon',
  'Navarrete',
  'Mondragon Navarrete',
  null,
  'docente',
  'V',
  'JMN1234'
);

select crear_usuario_sec2(
  'M057',
  'JOMOVA',
  'Jose Antonio',
  'Monroy',
  'Valdés',
  'Monroy Valdés',
  null,
  'docente',
  'A',
  'JMV1234'
);

select crear_usuario_sec2(
  'M058',
  'ANNAPA',
  'Angélica',
  'Nateras',
  'Paniagua',
  'Nateras Paniagua',
  null,
  'docente',
  'M',
  'ANP1234'
);

select crear_usuario_sec2(
  'M059',
  'ELNIME',
  'Elvia',
  'Nieto',
  'Mendoza',
  'Nieto Mendoza',
  null,
  'docente',
  'V',
  'ENM1234'
);

select crear_usuario_sec2(
  'D001',
  'ANPANA',
  'Anahí Massiel',
  'Paulín',
  'Nateras',
  'Paulín Nateras',
  null,
  'direccion',
  'A',
  'APN1234'
);

select crear_usuario_sec2(
  'M060',
  'JUPAMA',
  'Julio Daniel',
  'Paulino',
  'Martínez',
  'Paulino Martínez',
  null,
  'docente',
  'V',
  'JPM1234'
);

select crear_usuario_sec2(
  'P003',
  'BLPEMO',
  'Blanca Estela',
  'Pedraza',
  'Mondragón',
  'Pedraza Mondragón',
  null,
  'prefectura',
  'V',
  'BPM1234'
);

select crear_usuario_sec2(
  'M061',
  'FRREGO',
  'Francisco Javier',
  'Reyes',
  'Gomez',
  'Reyes Gomez',
  null,
  'docente',
  'M',
  'FRG1234'
);

select crear_usuario_sec2(
  'M062',
  'DOREME',
  'Dominga',
  'Reyes',
  'Mendoza',
  'Reyes Mendoza',
  null,
  'docente',
  'A',
  'DRM1234'
);

select crear_usuario_sec2(
  'M063',
  'ALRIME',
  'Alfonso Ricardo',
  'Rivas',
  'Medina',
  'Rivas Medina',
  null,
  'docente',
  'V',
  'ARM1234'
);

select crear_usuario_sec2(
  'M064',
  'GERORE',
  'Genaro',
  'Rodríguez',
  'Reyes',
  'Rodríguez Reyes',
  null,
  'docente',
  'V',
  'GRR1234'
);

select crear_usuario_sec2(
  'M065',
  'EUROHE',
  'Eunice',
  'Romero',
  'Hernández',
  'Romero Hernández',
  null,
  'docente',
  'M',
  'ERH1234'
);

select crear_usuario_sec2(
  'M066',
  'SEROGA',
  'Sergio Alfredo',
  'Rosales',
  'Gaytán',
  'Rosales Gaytán',
  null,
  'docente',
  'A',
  'SRG1234'
);

select crear_usuario_sec2(
  'M067',
  'JESEMI',
  'Jesús Antonio',
  'Serrano',
  'Miralrio',
  'Serrano Miralrio',
  null,
  'docente',
  'A',
  'JSM1234'
);

select crear_usuario_sec2(
  'M068',
  'MASIAN',
  'Manuel Adolfo',
  'Sierra',
  'Andrade',
  'Sierra Andrade',
  null,
  'docente',
  'V',
  'MSA1234'
);

select crear_usuario_sec2(
  'M069',
  'ALSOGU',
  'Alejandra Irma',
  'Solís',
  'Guerrero',
  'Solís Guerrero',
  null,
  'docente',
  'M',
  'ASG1234'
);

select crear_usuario_sec2(
  'M070',
  'YISOGA',
  'Yina',
  'Soria',
  'García',
  'Soria García',
  null,
  'docente',
  'A',
  'YSG1234'
);

select crear_usuario_sec2(
  'M071',
  'DASOGU',
  'David',
  'Soto',
  'Guzmán',
  'Soto Guzmán',
  null,
  'docente',
  'M',
  'DSG1234'
);

select crear_usuario_sec2(
  'M072',
  'JOSUMA',
  'Joseph',
  'Suarez',
  'Martinez',
  'Suarez Martinez',
  null,
  'docente',
  'A',
  'JSM1234'
);

select crear_usuario_sec2(
  'M073',
  'NOTAAR',
  'Norma',
  'Tavira',
  'Arguello',
  'Tavira Arguello',
  null,
  'docente',
  'M',
  'NTA1234'
);

select crear_usuario_sec2(
  'M074',
  'ELTACH',
  'Eliana Elizabeth',
  'Tavira',
  'Chávez',
  'Tavira Chávez',
  null,
  'docente',
  'V',
  'ETC1234'
);

select crear_usuario_sec2(
  'M075',
  'ARTOCO',
  'Arturo',
  'Torres',
  'Contreras',
  'Torres Contreras',
  null,
  'docente',
  'M',
  'ATC1234'
);

select crear_usuario_sec2(
  'P001',
  'JATORO',
  'Jaime',
  'Torres',
  'Rodea',
  'Torres Rodea',
  null,
  'prefectura',
  'V',
  'JTR1234'
);

select crear_usuario_sec2(
  'M076',
  'ALVACO',
  'Alain Darío',
  'Vaca',
  'Cortés',
  'Vaca Cortés',
  null,
  'docente',
  'V',
  'AVC1234'
);

select crear_usuario_sec2(
  'M077',
  'MAVACA',
  'Mayra Beatriz',
  'Valdespino',
  'Cacique',
  'Valdespino Cacique',
  null,
  'docente',
  'A',
  'MVC1234'
);

select crear_usuario_sec2(
  'M078',
  'MAVALI',
  'Marilú',
  'Valdez',
  'Linares',
  'Valdez Linares',
  null,
  'docente',
  'V',
  'MVL1234'
);

select crear_usuario_sec2(
  'M079',
  'EDVANA',
  'Edwin Giovanny',
  'Valencia',
  'Nateras',
  'Valencia Nateras',
  null,
  'docente',
  'A',
  'EVN1234'
);

select crear_usuario_sec2(
  'M080',
  'YTVAGA',
  'Ytzela Alejandra',
  'Vargas',
  'Garduño',
  'Vargas Garduño',
  null,
  'docente',
  'A',
  'YVG1234'
);

select crear_usuario_sec2(
  'M081',
  'SUVARO',
  'Susana',
  'Vázquez',
  'Rosas',
  'Vázquez Rosas',
  null,
  'docente',
  'V',
  'SVR1234'
);

select crear_usuario_sec2(
  'M082',
  'GEVEVA',
  'Georgina',
  'Vega',
  'Vaca',
  'Vega Vaca',
  null,
  'docente',
  'A',
  'GVV1234'
);

select crear_usuario_sec2(
  'M083',
  'FAZACA',
  'Fabiola',
  'Zannatta',
  'Cázarez',
  'Zannatta Cázarez',
  null,
  'docente',
  'A',
  'FZC1234'
);

select crear_usuario_sec2(
  'M084',
  'FRZAAL',
  'Francisco Daniel',
  'Zavala',
  'Alvarez',
  'Zavala Alvarez',
  null,
  'docente',
  'M',
  'FZA1234'
);

-- Verificación rápida
select r.nombre as rol, count(*) as total
from usuarios u
join roles r on r.id = u.rol_id
group by r.nombre
order by r.nombre;