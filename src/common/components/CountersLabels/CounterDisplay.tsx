import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import React from 'react';
import {
  CountersConfigurations,
  CounterType,
} from '../../types/customizeBarTypes';
import { MetaData, Trend } from '../../types/modals';
import { getMetadataKeyValueDisplay } from '../../utils/displayUtils';

export default function CounterDisplay({
  counter,
  metadata,
  countersConfiguration,
  trends,
  width,
  maxWidth = '6ch',
}: {
  counter: CounterType;
  metadata: MetaData;
  countersConfiguration: CountersConfigurations;
  trends: Trend[];
  width?: string;
  maxWidth?: string;
}) {
  const metadataKeyValue = counter.metadataKeyValue;
  if (!metadataKeyValue) return <></>;
  const displayResult = counter.calculationConfiguration.calculate(
    metadataKeyValue,
    metadata,
    trends,
    countersConfiguration
  );
  if (!displayResult.counter) return <></>;

  return (
    <span
      data-tip={
        `${getMetadataKeyValueDisplay(metadataKeyValue)} - ${
          counter.calculationConfiguration.name
        }` +
        getMetadataValueTitle(displayResult.metadataKey, displayResult.value)
      }
      data-for="global"
      className={`flex items-center text-sm ${
        counter.calculationConfiguration.type !== 'trend' &&
        displayResult.result < 1
          ? 'text-gray-500 dark:text-white'
          : displayResult.counter.display
          ? displayResult.counter.display.color === 'green'
            ? 'text-emerald-400'
            : displayResult.counter.display.color === 'red'
            ? 'text-red-400'
            : 'text-gray-500 dark:text-white'
          : 'text-gray-500 dark:text-white'
      }`}
    >
      {counter.calculationConfiguration.type === 'trend' &&
      displayResult.result > 0 ? (
        <span
          className="text-emerald-400"
          style={{ width: '1em', height: '1em' }}
        >
          <ArrowUpIcon />
        </span>
      ) : (
        counter.calculationConfiguration.type === 'trend' &&
        displayResult.result < 0 && (
          <span
            className="text-red-400"
            style={{ width: '1em', height: '1em' }}
          >
            <ArrowDownIcon />
          </span>
        )
      )}
      {displayResult.counter.display &&
        displayResult.counter.display.icon !== null && (
          <span style={{ width: '1em', height: '1em' }}>
            {displayResult.counter.display.icon}
          </span>
        )}
      <span
        className={`${
          counter.calculationConfiguration.type === 'trend'
            ? displayResult.result > 0
              ? 'text-emerald-400'
              : displayResult.result < 0
              ? 'text-red-400'
              : 'text-gray-500 dark:text-white'
            : ''
        }`}
        style={{ width, maxWidth }}
      >
        {displayResult.result}
        {counter.calculationConfiguration.type === 'percentage' ||
          (counter.calculationConfiguration.type === 'trend' && '%')}
      </span>
    </span>
  );
}

function getMetadataValueTitle(
  metadata: string | undefined,
  value: string | undefined
) {
  if (metadata) {
    if (value) return `(${metadata}.${value})`;
    return `(${metadata})`;
  }

  if (value) {
    return `(${value})`;
  }

  return '';
}
