using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class patientprop4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarePlans_Patients_PatientId1",
                table: "CarePlans");

            migrationBuilder.DropIndex(
                name: "IX_CarePlans_PatientId1",
                table: "CarePlans");

            migrationBuilder.DropColumn(
                name: "PatientId1",
                table: "CarePlans");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PatientId1",
                table: "CarePlans",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CarePlans_PatientId1",
                table: "CarePlans",
                column: "PatientId1");

            migrationBuilder.AddForeignKey(
                name: "FK_CarePlans_Patients_PatientId1",
                table: "CarePlans",
                column: "PatientId1",
                principalTable: "Patients",
                principalColumn: "Id");
        }
    }
}
