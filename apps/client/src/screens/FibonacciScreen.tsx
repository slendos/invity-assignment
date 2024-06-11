import { zodResolver } from '@hookform/resolvers/zod';
import { skipToken, useQuery } from '@tanstack/react-query';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { getFibonacciNumber } from '@/lib/api';

const formSchema = z.object({ fibonacciNumber: z.number().positive().max(3000) });
type FormModel = z.infer<typeof formSchema>;

export function FibonacciScreen() {
  const [number, setNumber] = useState<number | null>(null);
  const inputId = useId();

  const { data, isLoading } = useQuery({
    queryKey: ['fibonacciNumber', number],
    queryFn: number ? () => getFibonacciNumber(number) : skipToken,
  });

  const { register, handleSubmit, formState } = useForm<FormModel>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: FormModel) => setNumber(data.fibonacciNumber);

  const error = formState.errors.fibonacciNumber;

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={inputId}>Generate Fibonacci number</label>
        {/*TODO improvement: https://ui.shadcn.com/*/}
        <input
          {...register('fibonacciNumber', { valueAsNumber: true })}
          autoFocus
          className="focus:shadow-outline mx-2 appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          disabled={isLoading}
          id={inputId}
          type="text"
        />
        <button
          className="disabled:bg-slate-10 rounded bg-blue-500 px-4 py-2 font-bold text-white enabled:hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-25"
          disabled={!!error || isLoading}
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
      {data && (
        <p className="mt-4">
          Fibonacci number for {number} is {data.fibonacciNumber}
        </p>
      )}
      {error && <p className="mt-2 text-red-700">{error.message}</p>}
    </div>
  );
}
