<script lang="ts" module>
  import type { Point } from '$lib/types/point.svelte';
  import type { Line } from '$lib/types/line.svelte';

  export class SnakeEngine {
    static readonly SNAKE_LENGTH = 20;
    private width: number;
    private height: number;
    private direction!: 'north' | 'east' | 'south' | 'west';
    private rate: number;
    private interval!: number;
    private points: Point[][];
    private snake = $state<Line[]>([]);

    constructor(points: Point[][], rate: number) {
      this.points = points;
      this.height = points.length;
      this.width = points[0].length;
      this.rate = rate;
      this.reset();
    }

    public reset() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.snake = [];
      switch (this.getRandomNumberInRange(0, 3)) {
        case 0:
          this.direction = 'north';
          break;
        case 1:
          this.direction = 'east';
          break;
        case 2:
          this.direction = 'south';
          break;
        default:
          this.direction = 'west';
          break;
      }

      this.interval = setInterval(() => {
        this.extend();
      }, this.rate);
    }

    public getSnake() {
      return this.snake.map((line) => this.translateLine(line));
    }

    private translateLine(line: Line): Line {
      const { p1, p2 }: Line = line;

      return {
        p1: this.points[p1.y][p1.x],
        p2: this.points[p2.y][p2.x]
      };
    }

    private randomRotate(): void | undefined {
      switch (this.getRandomNumberInRange(0, 2)) {
        case 0:
          return this.rotateLeft();
        case 1:
          return this.rotateRight();
        case 2:
        // do nothing -- continue straight
      }
    }

    private extend() {
      let prevPoint: Point, nextPoint: Point;
      let line: Line;

      this.randomRotate();
      prevPoint = this.getLastPoint();
      nextPoint = this.getNextPoint(prevPoint);
      line = { p1: prevPoint, p2: nextPoint };

      if (nextPoint.x < 0) {
        nextPoint.x = this.width - 1;
        this.direction = 'west';
        line = { p1: nextPoint, p2: this.getNextPoint(nextPoint) };
      }

      if (nextPoint.x >= this.width) {
        nextPoint.x = 0;
        this.direction = 'east';
        line = { p1: nextPoint, p2: this.getNextPoint(nextPoint) };
      }

      if (nextPoint.y < 0) {
        nextPoint.y = this.height - 1;
        this.direction = 'north';
        line = { p1: nextPoint, p2: this.getNextPoint(nextPoint) };
      }

      if (nextPoint.y >= this.height) {
        nextPoint.y = 0;
        this.direction = 'south';
        line = { p1: nextPoint, p2: this.getNextPoint(nextPoint) };
      }

      this.addLine(line);
    }

    private addLine(line: Line): void {
      if (this.snake.length === SnakeEngine.SNAKE_LENGTH) {
        this.snake.shift();
      }
      this.snake.push(line);
    }

    private getRandomNumberInRange(lower: number, higher: number): number {
      return Math.round(Math.random() * (higher - lower) + lower);
    }

    private getInitialPoint(): Point {
      const padding = 2;
      return {
        x: this.getRandomNumberInRange(padding, this.width - padding),
        y: this.getRandomNumberInRange(padding, this.height - padding)
      };
    }

    private getPointDirection(): Point {
      switch (this.direction) {
        case 'north':
          return { x: 0, y: -1 };
        case 'east':
          return { x: 1, y: 0 };
        case 'south':
          return { x: 0, y: 1 };
        case 'west':
          return { x: -1, y: 0 };
      }
    }

    private getStringDirection(p: Point) {
      if (p.x === 0 && p.y === -1) return 'north';
      if (p.x === -1 && p.y === 0) return 'east';
      if (p.x === 0 && p.y === 1) return 'south';
      if (p.x === 1 && p.y === 0) return 'west';
      return 'north';
    }

    private getLastPoint(): Point {
      if (this.snake.length > 0) {
        return this.snake.at(-1)!.p2;
      }

      return this.getInitialPoint();
    }

    private getNextPoint(lastPoint: Point): Point {
      let pointDirection: Point,
        nextPoint: Point = { x: lastPoint.x, y: lastPoint.y };

      pointDirection = this.getPointDirection();
      nextPoint.x += pointDirection.x;
      nextPoint.y += pointDirection.y;

      return nextPoint;
    }

    private rotateLeft(): void {
      let p: Point;
      p = this.getPointDirection();
      [p.x, p.y] = [p.y, -p.x];
      this.direction = this.getStringDirection(p);
    }

    private rotateRight(): void {
      let p: Point;
      p = this.getPointDirection();
      [p.x, p.y] = [-p.y, p.x];
      this.direction = this.getStringDirection(p);
    }
  }
</script>
