using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class CarePlanDTO
    {
        public int PatientId { get; set; }

        public string LevelOfUnderstanding { get; set; }

        public string Communication { get; set; }
        public string Mobility { get; set; }
        public string PersonalCare { get; set; }
        public string ContinenceCare { get; set; }
        public string OralCare { get; set; }
        public string NutritionAndHydration { get; set; }
        public string SkinCare { get; set; }

        public string InterestsAndHobbies { get; set; }
        public string MentalHealth { get; set; }
        public string Medication { get; set; }
        public string EolPref { get; set; }
        public string ReligiousAndCulturalBeliefs { get; set; }
    }
}