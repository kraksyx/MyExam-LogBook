const questions = [
  {
    "question": "1. Who must maintain a personal logbook with details of all flights as an active flight crew member?",
    "options": ["Pilot", "Cabin Crew", "Flight Instructor"],
    "correct": 0
  },
  {
    "question": "2. What should logbook entries duplicate?",
    "options": ["Flight manual entries", "Aircraft maintenance logs", "Tech Log and Exercise Grade Sheet"],
    "correct": 2
  },
  {
    "question": "3. When should student logbooks be presented to the CFI?",
    "options": ["Before each Progress Test", "After each exam", "Before each solo flight"],
    "correct": 0
  },
  {
    "question": "4. When should flight crew logbook entries be made?",
    "options": ["During pre-flight briefing", "Before boarding the aircraft", "As soon as practicable after the flight"],
    "correct": 2
  },
  {
    "question": "5. Who supervises student logbook entries during post-flight briefing?",
    "options": ["Flight Supervisor", "CFI", "Flight Instructor"],
    "correct": 2
  },
  {
    "question": "6. How many lines are used per flight in the logbook?",
    "options": ["Two", "One", "Depends on the duration"],
    "correct": 1
  },
  {
    "question": "7. What is the correct date format for logbook entries?",
    "options": ["DD/MM/YY", "MM/DD/YYYY", "YYYY-MM-DD"],
    "correct": 0
  },
  {
    "question": "8. What type of ink must be used for logbook entries?",
    "options": ["Ballpoint pen", "Pencil", "Indelible ink"],
    "correct": 2
  },
  {
    "question": "9. In what format should flight time be recorded?",
    "options": ["Only in hours", "Decimal format", "In hours and minutes"],
    "correct": 2
  },
  {
    "question": "10. From when to when should flight times be recorded?",
    "options": ["From first movement to final stop", "From engine start to engine stop", "From takeoff to landing only"],
    "correct": 0
  },
  {
    "question": "11. In what time standard must all times be recorded in the logbook?",
    "options": ["Local time", "UTC", "GMT"],
    "correct": 1
  },
  {
    "question": "12. How should departure and destination places be entered in the logbook?",
    "options": ["Using full names or IATA/ICAO codes", "Using nicknames", "Just the city name"],
    "correct": 0
  },
  {
    "question": "13. What is recorded in the ‘IF’ column of the logbook?",
    "options": ["IFR flight time", "Visual flight time", "Instrument time when controlling solely by instruments"],
    "correct": 2
  },
  {
    "question": "14. What qualifies as Navigation time in a logbook?",
    "options": ["Flights above 1 hour only", "Flights that follow a pre-planned route", "Any random flight"],
    "correct": 1
  },
  {
    "question": "15. When can a license holder log all flight time as PIC?",
    "options": ["During night flights only", "Only when flying solo", "When acting as Pilot in Command"],
    "correct": 2
  },
  {
    "question": "16. Who is the PIC during instructional flights with students?",
    "options": ["The flight instructor", "The student", "The flight examiner"],
    "correct": 0
  },
  {
    "question": "17. When can students log flight time as PIC?",
    "options": ["During every dual flight", "Only during exams", "During solo and SPIC flights"],
    "correct": 2
  },
  {
    "question": "18. In which column should solo flight time always be recorded?",
    "options": ["Total", "PIC", "DUAL"],
    "correct": 1
  },
  {
    "question": "19. What should be entered as the PIC name for student solo flights?",
    "options": ["Instructor’s name", "SELF", "Examiner"],
    "correct": 1
  },
  {
    "question": "20. When do students log dual training time?",
    "options": ["While flying solo", "During exams", "When receiving training from a flight instructor"],
    "correct": 2
  },
  {
    "question": "21. When should dual flights be signed in the logbook?",
    "options": ["At the end of the training program", "After every dual flight", "Weekly"],
    "correct": 1
  },
  {
    "question": "22. Where should time in simulators or training devices be logged?",
    "options": ["PIC column", "IF column", "FSTD section"],
    "correct": 2
  },
  {
    "question": "23. How should 'Type' be recorded in the logbook?",
    "options": ["Light aircraft", "Single", "SR22"],
    "correct": 2
  },
  {
    "question": "24. How should 'Registration' be recorded?",
    "options": ["Full registration", "Airport code", "Partial registration"],
    "correct": 0
  },
  {
    "question": "25. What should be selected for SE or ME?",
    "options": ["Write it", "Tick (√)", "Circle"],
    "correct": 1
  },
  {
    "question": "26. Who should be named as PIC for dual flights?",
    "options": ["Student", "Flight Instructor", "SELF"],
    "correct": 1
  },
  {
    "question": "27. How should PIC time be recorded?",
    "options": ["In HH MM format", "Only in hours", "As decimal"],
    "correct": 0
  },
  {
    "question": "28. Where should remarks about SPIC be written?",
    "options": ["PIC column", "Remarks & Endorsements column", "IF column"],
    "correct": 1
  },
  {
    "question": "29. Can SPIC time be logged if the mission failed?",
    "options": ["Yes, always", "Only if countersigned", "No, it becomes DUAL"],
    "correct": 2
  },
  {
    "question": "30. When should a new page be started in the logbook?",
    "options": ["Every month", "Every 10 flights", "Every week"],
    "correct": 0
  },
  {
    "question": "31. What is the correct formula for calculating PIC and Total Time?",
    "options": ["Solo + SPIC = PIC, PIC + DUAL = Total Time", "Solo + DUAL = PIC, PIC + SPIC = Total Time", "SPIC + DUAL = PIC, PIC + Solo = Total Time"],
    "correct": 0
  }
];
