/**
 * 🚂 Mumbai Local Train Pass Generator
 *
 * Aaj se tu Mumbai local ka digital pass system bana raha hai! Passenger
 * ka data milega aur tujhe ek formatted pass string generate karni hai.
 * Pass mein sab details honi chahiye ek specific format mein.
 *
 * Rules:
 *   - passenger object mein required fields: name, from, to, classType
 *   - classType must be "first" ya "second" (case-insensitive check)
 *   - Pass ID generate karo:
 *     classType ka first char uppercase + from ke pehle 3 letters uppercase
 *     + to ke pehle 3 letters uppercase
 *     Example: "first", "dadar", "andheri" => "F" + "DAD" + "AND" = "FDADAND"
 *   - Output format using template literal:
 *     Line 1: "MUMBAI LOCAL PASS"
 *     Line 2: "---"
 *     Line 3: "Name: <NAME IN UPPERCASE>"
 *     Line 4: "From: <From in Title Case>"
 *     Line 5: "To: <To in Title Case>"
 *     Line 6: "Class: <FIRST or SECOND>"
 *     Line 7: "Pass ID: <PASSID>"
 *   - Title Case = first letter uppercase, rest lowercase
 *   - Lines are separated by \n (newline)
 *   - Hint: Use template literals, slice(), toUpperCase(), toLowerCase(),
 *     charAt(), typeof
 *
 * Validation:
 *   - Agar passenger object nahi hai ya null hai, return "INVALID PASS"
 *   - Agar koi required field (name, from, to, classType) missing hai
 *     ya empty string hai, return "INVALID PASS"
 *   - Agar classType "first" ya "second" nahi hai, return "INVALID PASS"
 *
 * @param {{ name: string, from: string, to: string, classType: string }} passenger
 * @returns {string} Formatted pass or "INVALID PASS"
 *
 * @example
 *   generateLocalPass({ name: "rahul sharma", from: "dadar", to: "andheri", classType: "first" })
 *   // => "MUMBAI LOCAL PASS\n---\nName: RAHUL SHARMA\nFrom: Dadar\nTo: Andheri\nClass: FIRST\nPass ID: FDADAND"
 *
 *   generateLocalPass(null)
 *   // => "INVALID PASS"
 */
export function generateLocalPass(passenger) {
  // Your code here
  if (
    !passenger ||
    typeof passenger !== "object" ||
    !passenger.name ||
    typeof passenger.name !== "string" ||
    !passenger.from ||
    typeof passenger.from !== "string" ||
    !passenger.to ||
    typeof passenger.to !== "string" ||
    !passenger.classType ||
    typeof passenger.classType !== "string"
  ) {
    return "INVALID PASS";
  }

  const classType = passenger.classType.toUpperCase();
  if (classType !== "FIRST" && classType !== "SECOND") {
    return "INVALID PASS";
  }

  // Helper: Title Case
  const titleCase = str =>
    str
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  const name = passenger.name.toUpperCase();
  const from = titleCase(passenger.from);
  const to = titleCase(passenger.to);

  // Pass ID: first char of classType + first 3 of from + first 3 of to, all uppercase
  const passID =
    (classType.charAt(0) +
      from.replace(/\s/g, "").slice(0, 3) +
      to.replace(/\s/g, "").slice(0, 3)
    ).toUpperCase();

  // Final pass string with proper line breaks
  return `MUMBAI LOCAL PASS
---
Name: ${name}
From: ${from}
To: ${to}
Class: ${classType}
Pass ID: ${passID}`;

}
