import { LEVEL_PRIORITY, type LogLevel } from "./logger.js";
import { providers, type ProviderName } from "./providers/index.js";

const VALID_LOG_LEVELS = Object.keys(LEVEL_PRIORITY) as LogLevel[];
const VALID_PROVIDERS = Object.keys(providers) as ProviderName[];

function isLogLevel(value: string): value is LogLevel {
  return value in LEVEL_PRIORITY;
}

export function isProviderName(value: string): value is ProviderName {
  return value in providers;
}

export function parsePort(value: string): number {
  const port = parseInt(value, 10);
  if (isNaN(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid port "${value}". Must be 1-65535.`);
  }
  return port;
}

export function parseLogLevel(value: string): LogLevel {
  if (!isLogLevel(value)) {
    throw new Error(
      `Invalid log level "${value}". Valid: ${VALID_LOG_LEVELS.join(", ")}`,
    );
  }
  return value;
}

export function parseProvider(value: string): ProviderName {
  if (!isProviderName(value)) {
    throw new Error(
      `Invalid provider "${value}". Valid: ${VALID_PROVIDERS.join(", ")}`,
    );
  }
  return value;
}

export function parseIdleTimeout(value: string): number {
  const minutes = parseInt(value, 10);
  if (isNaN(minutes) || minutes < 0) {
    throw new Error(`Invalid idle timeout "${value}". Must be a non-negative integer (minutes).`);
  }
  return minutes;
}
