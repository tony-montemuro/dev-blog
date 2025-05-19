<script lang="ts" module>
  import type { Point } from '$lib/types/point.svelte';
  import type { Line } from '$lib/types/line.svelte';
  import type { Grid } from '$lib/types/grid.svelte';
  import type { Quadrant } from '$lib/types/quadrant.svelte';

  export class SnakeEngine {
    private grid: Grid;
    private direction: 'north' | 'east' | 'south' | 'west';
    private rate: number;
    private length: number;
    private initialQuadrant: Quadrant;
    private initialPadding: number;
    private id: number = 1;
    private snake = $state<Line[]>([]);

    constructor(grid: Grid, rate: number, length: number, quadrant: Quadrant, padding: number) {
      this.grid = grid;
      this.rate = rate;
      this.length = length;
      this.initialQuadrant = quadrant;
      this.initialPadding = padding;
      this.direction = this.getRandomDirection();

      setInterval(() => {
        this.extend();
      }, this.rate);
    }

    public getSnake() {
      return this.snake.map((line) => this.translateLine(line));
    }

    private translateLine(line: Line): Line {
      const { p1, p2 }: Line = line;

      return {
        p1: { x: p1.x * this.grid.colsGap, y: p1.y * this.grid.rowsGap },
        p2: { x: p2.x * this.grid.colsGap, y: p2.y * this.grid.rowsGap },
        id: line.id
      };
    }

    private getRandomDirection() {
      switch (this.getRandomNumberInRange(0, 3)) {
        case 0:
          return 'north';
        case 1:
          return 'east';
        case 2:
          return 'south';
      }
      return 'west';
    }

    // 25% chance of moving left
    // 25% chance of moving right
    // 50% chance of moving straight
    private randomRotate(): void | undefined {
      switch (this.getRandomNumberInRange(0, 3)) {
        case 0:
          return this.rotateLeft();
        case 1:
          return this.rotateRight();
        default:
        // do nothing -- continue straight
      }
    }

    private extend() {
      let prevPoint: Point, nextPoint: Point;
      let line: Line;

      this.randomRotate();
      prevPoint = this.getLastPoint();
      nextPoint = this.getNextPoint(prevPoint);
      line = { p1: prevPoint, p2: nextPoint, id: this.id };

      if (nextPoint.x < 0) {
        nextPoint.x = this.grid.cols - 1;
        this.direction = 'west';
        line.p1 = nextPoint;
        line.p2 = this.getNextPoint(nextPoint);
      }

      if (nextPoint.x >= this.grid.cols) {
        nextPoint.x = 0;
        this.direction = 'east';
        line.p1 = nextPoint;
        line.p2 = this.getNextPoint(nextPoint);
      }

      if (nextPoint.y < 0) {
        nextPoint.y = this.grid.rows - 1;
        this.direction = 'north';
        line.p1 = nextPoint;
        line.p2 = this.getNextPoint(nextPoint);
      }

      if (nextPoint.y >= this.grid.rows) {
        nextPoint.y = 0;
        this.direction = 'south';
        line.p1 = nextPoint;
        line.p2 = this.getNextPoint(nextPoint);
      }

      this.addLine(line);
      this.id = (this.id + 1) % (this.length + 1);
    }

    private addLine(line: Line): void {
      if (this.snake.length === this.length) {
        this.snake = [...this.snake.slice(1), line];
      } else {
        this.snake.push(line);
      }
    }

    private getRandomNumberInRange(lower: number, higher: number): number {
      return Math.round(Math.random() * (higher - lower) + lower);
    }

    private getInitialPoint(): Point {
      let lowerX: number = 0,
        lowerY: number = 0,
        higherX: number = this.grid.cols,
        higherY: number = this.grid.rows;

      if (this.initialQuadrant === 1 || this.initialQuadrant === 2) {
        higherY = this.grid.rows / 2;
      }

      if (this.initialQuadrant === 3 || this.initialQuadrant === 4) {
        lowerY = this.grid.rows / 2;
      }

      if (this.initialQuadrant === 2 || this.initialQuadrant === 3) {
        higherX = this.grid.cols / 2;
      }

      if (this.initialQuadrant === 1 || this.initialQuadrant === 4) {
        lowerX = this.grid.cols / 2;
      }

      return {
        x: this.getRandomNumberInRange(lowerX + this.initialPadding, higherX - this.initialPadding),
        y: this.getRandomNumberInRange(lowerY + this.initialPadding, higherY - this.initialPadding)
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
