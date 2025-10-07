type GradientType = "linear" | "radial";

export interface GradientOptions {
  colors: string[];
  type?: GradientType;
  angle?: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

const createLinearGradient = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  angle: number
) => {
  const radians = toRadians(angle);
  const vectorX = Math.cos(radians);
  const vectorY = Math.sin(radians);
  const centerX = width / 2;
  const centerY = height / 2;
  const halfDiagonal = Math.sqrt(width * width + height * height) / 2;

  const startX = centerX - vectorX * halfDiagonal;
  const startY = centerY - vectorY * halfDiagonal;
  const endX = centerX + vectorX * halfDiagonal;
  const endY = centerY + vectorY * halfDiagonal;

  return ctx.createLinearGradient(startX, startY, endX, endY);
};

const createRadialGradient = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.sqrt(width * width + height * height) / 2;
  return ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    radius
  );
};

export const drawGradient = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  options: GradientOptions
) => {
  const { colors, type = "linear", angle = 45 } = options;

  if (!colors || colors.length === 0) {
    ctx.clearRect(0, 0, width, height);
    return;
  }

  let gradient: CanvasGradient;

  if (type === "radial") {
    gradient = createRadialGradient(ctx, width, height);
  } else {
    gradient = createLinearGradient(ctx, width, height, angle);
  }

  const divisor = colors.length > 1 ? colors.length - 1 : 1;
  colors.forEach((color, index) => {
    const stop = clamp(index / divisor, 0, 1);
    gradient.addColorStop(stop, color);
  });

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
};

export const applyGrain = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  intensity = 20
) => {
  if (width === 0 || height === 0) return;

  const grainCanvas = document.createElement("canvas");
  grainCanvas.width = width;
  grainCanvas.height = height;

  const grainContext = grainCanvas.getContext("2d");
  if (!grainContext) return;

  const imageData = grainContext.createImageData(width, height);
  const alpha = clamp(Math.floor(intensity * 8), 0, 255);

  for (let i = 0; i < imageData.data.length; i += 4) {
    const value = Math.floor(Math.random() * 256);
    imageData.data[i] = value;
    imageData.data[i + 1] = value;
    imageData.data[i + 2] = value;
    imageData.data[i + 3] = alpha;
  }

  grainContext.putImageData(imageData, 0, 0);

  ctx.save();
  ctx.globalAlpha = clamp(0.05 + (alpha / 255) * 0.25, 0.05, 0.3);
  ctx.globalCompositeOperation = "soft-light";
  ctx.drawImage(grainCanvas, 0, 0);
  ctx.restore();
};
