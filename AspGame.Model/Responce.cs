using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspGame.Model
{
    public class Responce
    {
        public static readonly Responce Success = new(StatusCodes.Ok);

        public StatusCodes Code { get; }

        public IEnumerable<string> Errors { get; }

        public bool IsValid => Code == StatusCodes.Ok;

        public Responce(StatusCodes code)
        {
            Code = code;
            Errors = Enumerable.Empty<string>();
        }

        public Responce(StatusCodes code, IEnumerable<string> errors) : this(code)
        {
            Errors = errors;
        }
    }

    public sealed class Responce<T> : Responce
    {
        public T? Value { get; }

        public Responce(T? value, StatusCodes code) : base(code)
        {
            Value = value;   
        }

        public Responce(T? value, StatusCodes code, IEnumerable<string> errors) : base(code, errors)
        {
            Value = value;
        }
    }

    public enum StatusCodes
    {
        Ok = 0,
        Error = 1,

    }
}
