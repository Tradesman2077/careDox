using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class addCarePlan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CarePlanId",
                table: "Patients",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "CarePlans",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PatientId = table.Column<int>(type: "INTEGER", nullable: false),
                    LevelOfUnderstanding = table.Column<string>(type: "TEXT", nullable: true),
                    Communication = table.Column<string>(type: "TEXT", nullable: true),
                    Mobility = table.Column<string>(type: "TEXT", nullable: true),
                    PersonalCare = table.Column<string>(type: "TEXT", nullable: true),
                    ContinenceCare = table.Column<string>(type: "TEXT", nullable: true),
                    OralCare = table.Column<string>(type: "TEXT", nullable: true),
                    NutritionAndHydration = table.Column<string>(type: "TEXT", nullable: true),
                    SkinCare = table.Column<string>(type: "TEXT", nullable: true),
                    InterestsAndHobbies = table.Column<string>(type: "TEXT", nullable: true),
                    MentalHealth = table.Column<string>(type: "TEXT", nullable: true),
                    Medication = table.Column<string>(type: "TEXT", nullable: true),
                    EolPref = table.Column<string>(type: "TEXT", nullable: true),
                    ReligiousAndCulturalBeliefs = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarePlans", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarePlans");

            migrationBuilder.DropColumn(
                name: "CarePlanId",
                table: "Patients");
        }
    }
}
