using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class patientRel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarePlans_Patients_PatientId",
                table: "CarePlans");

            migrationBuilder.DropIndex(
                name: "IX_CarePlans_PatientId",
                table: "CarePlans");

            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "CarePlans");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "CarePlans",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddForeignKey(
                name: "FK_CarePlans_Patients_Id",
                table: "CarePlans",
                column: "Id",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarePlans_Patients_Id",
                table: "CarePlans");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "CarePlans",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<int>(
                name: "PatientId",
                table: "CarePlans",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CarePlans_PatientId",
                table: "CarePlans",
                column: "PatientId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CarePlans_Patients_PatientId",
                table: "CarePlans",
                column: "PatientId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
