module objects {
  /* closure  - IIFE */
  export class Point {
    x: number;
    y: number;
    // Point class constructor
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    // Normalize method
    Normalize(): void {
      this.x = 1;
      this.y = 1;
    }

    // Zero method
    Zero(): void {
      this.x = 0;
      this.y = 0;
    }

    // static method Distance
    public static Distance(p1: Point, p2: Point) {
      return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
    }

  }
}
