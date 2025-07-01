
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Users, Calendar, CheckCircle, Clock } from "lucide-react";

const TrainingDevelopment = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const trainingPrograms = [
    {
      id: 1,
      title: "Farm Safety Certification",
      description: "Essential safety training for all farm workers",
      duration: "4 hours",
      type: "Certification",
      enrolled: 25,
      completed: 18,
      status: "Active"
    },
    {
      id: 2,
      title: "Equipment Operation Training",
      description: "Training on operating farm machinery safely",
      duration: "8 hours",
      type: "Skills",
      enrolled: 15,
      completed: 12,
      status: "Active"
    },
    {
      id: 3,
      title: "Livestock Handling",
      description: "Proper techniques for handling livestock",
      duration: "6 hours",
      type: "Skills",
      enrolled: 10,
      completed: 8,
      status: "Active"
    }
  ];

  const employeeTraining = [
    {
      id: 1,
      employee: "John Smith",
      department: "Field Operations",
      completedCourses: 5,
      totalCourses: 6,
      certifications: ["Safety", "Equipment"],
      lastCompleted: "2024-05-15"
    },
    {
      id: 2,
      employee: "Maria Garcia",
      department: "Livestock",
      completedCourses: 4,
      totalCourses: 5,
      certifications: ["Safety", "Livestock"],
      lastCompleted: "2024-05-20"
    },
    {
      id: 3,
      employee: "David Johnson",
      department: "Equipment",
      completedCourses: 3,
      totalCourses: 6,
      certifications: ["Safety"],
      lastCompleted: "2024-04-10"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Training & Development</h1>
            <p className="text-gray-600">Manage employee training programs and certifications</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <BookOpen className="h-4 w-4 mr-2" />
            New Training Program
          </Button>
        </div>

        {/* Training Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Programs</p>
                  <p className="text-3xl font-bold">{trainingPrograms.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                  <p className="text-3xl font-bold">50</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completions</p>
                  <p className="text-3xl font-bold">38</p>
                </div>
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Certifications</p>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <Award className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Training Programs</CardTitle>
            <CardDescription>Available training programs and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Program</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Enrolled</TableHead>
                  <TableHead>Completion Rate</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trainingPrograms.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{program.title}</div>
                        <div className="text-sm text-gray-500">{program.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{program.type}</Badge>
                    </TableCell>
                    <TableCell>{program.duration}</TableCell>
                    <TableCell>{program.enrolled} employees</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{program.completed}/{program.enrolled} ({Math.round(program.completed/program.enrolled*100)}%)</div>
                        <Progress value={program.completed/program.enrolled*100} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">{program.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Employee Training Records */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Training Records</CardTitle>
            <CardDescription>Individual training progress and certifications</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Certifications</TableHead>
                  <TableHead>Last Completed</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeeTraining.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div className="font-medium">{record.employee}</div>
                    </TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{record.completedCourses}/{record.totalCourses} courses</div>
                        <Progress value={record.completedCourses/record.totalCourses*100} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {record.certifications.map((cert, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {record.lastCompleted}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TrainingDevelopment;
