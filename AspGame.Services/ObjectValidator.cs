using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AspGame.Services
{
    static class ObjectValidator
    {
        public static bool IsValid(object instance, out IEnumerable<string> errors)
        {
            var context = new ValidationContext(instance);
            var internalErrors = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(instance, context, internalErrors);

            errors = internalErrors.Select(x => x.ErrorMessage)
                .Where(x => x != null)!;

            return isValid;
        }
    }
}
