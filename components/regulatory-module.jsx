"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileText, Calendar, CheckCircle, AlertTriangle, Info, Target, BarChart3 } from "lucide-react"

export default function RegulatoryModule() {
  const regulations = [
    {
      name: "Ley 1581 de 2012 - Protección de Datos",
      description: "Régimen general de protección de datos personales",
      compliance: 75,
      status: "En Progreso",
      lastAudit: "2024-01-15",
      nextReview: "2024-06-15",
      requirements: 12,
      completed: 9,
      authority: "Superintendencia de Industria y Comercio (SIC)",
      penalties: "Hasta 2,000 SMMLV",
      keyRequirements: [
        "Registro Nacional de Bases de Datos (RNBD)",
        "Políticas de tratamiento de datos",
        "Consentimiento informado",
        "Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición)",
      ],
      gaps: ["Actualizar registro RNBD", "Capacitar personal en HABEAS DATA", "Implementar procedimiento ARCO"],
    },
    {
      name: "Decreto 1377 de 2013",
      description: "Reglamentación parcial de la Ley 1581 de 2012",
      compliance: 82,
      status: "Cumple",
      lastAudit: "2024-01-20",
      nextReview: "2024-07-20",
      requirements: 8,
      completed: 7,
      authority: "Superintendencia de Industria y Comercio (SIC)",
      penalties: "Multas y sanciones administrativas",
      keyRequirements: [
        "Aviso de privacidad",
        "Autorización previa",
        "Medidas de seguridad",
        "Transferencias internacionales",
      ],
      gaps: ["Mejorar avisos de privacidad en formularios web"],
    },
    {
      name: "Circular Externa 007 de 2018 - SIC",
      description: "Instrucciones para la implementación del RGPD",
      compliance: 68,
      status: "Requiere Atención",
      lastAudit: "2023-12-10",
      nextReview: "2024-03-10",
      requirements: 15,
      completed: 10,
      authority: "Superintendencia de Industria y Comercio (SIC)",
      penalties: "Sanciones administrativas",
      keyRequirements: [
        "Evaluación de impacto",
        "Registro de actividades de tratamiento",
        "Notificación de violaciones",
        "Delegado de protección de datos",
      ],
      gaps: [
        "Designar delegado de protección de datos",
        "Implementar evaluaciones de impacto",
        "Crear registro de actividades",
        "Procedimiento de notificación de brechas",
        "Capacitación continua del personal",
      ],
    },
    {
      name: "ISO 27001:2013",
      description: "Sistema de gestión de seguridad de la información",
      compliance: 45,
      status: "En Desarrollo",
      lastAudit: "2024-02-01",
      nextReview: "2024-08-01",
      requirements: 114,
      completed: 51,
      authority: "Organismo de certificación acreditado",
      penalties: "Pérdida de certificación",
      keyRequirements: [
        "Política de seguridad de la información",
        "Evaluación y tratamiento de riesgos",
        "Declaración de aplicabilidad",
        "Programa de auditorías internas",
      ],
      gaps: [
        "Completar análisis de riesgos",
        "Implementar controles del Anexo A",
        "Establecer programa de auditorías internas",
        "Capacitar auditores internos",
        "Documentar procedimientos faltantes",
      ],
    },
  ]

  const complianceActions = [
    {
      id: 1,
      title: "Actualizar Política de Privacidad",
      regulation: "Ley 1581 de 2012",
      priority: "Alta",
      dueDate: "2024-03-15",
      responsible: "Legal/TI",
      status: "En Progreso",
      progress: 60,
      description: "Revisar y actualizar política de privacidad conforme a normativa vigente",
      deliverables: ["Política actualizada", "Aprobación legal", "Publicación web"],
      budget: "$20,500",
    },
    {
      id: 2,
      title: "Implementar Registro de Actividades",
      regulation: "Decreto 1377 de 2013",
      priority: "Media",
      dueDate: "2024-04-01",
      responsible: "TI",
      status: "Pendiente",
      progress: 20,
      description: "Crear y mantener registro detallado de actividades de tratamiento",
      deliverables: ["Plantilla de registro", "Procedimiento", "Capacitación"],
      budget: "$10,800",
    },
    {
      id: 3,
      title: "Capacitación en Protección de Datos",
      regulation: "Circular 007 SIC",
      priority: "Alta",
      dueDate: "2024-03-30",
      responsible: "RRHH/TI",
      status: "Planificado",
      progress: 10,
      description: "Programa de capacitación para todo el personal en protección de datos",
      deliverables: ["Material de capacitación", "Evaluaciones", "Certificados"],
      budget: "$30,200",
    },
    {
      id: 4,
      title: "Evaluación de Riesgos ISO 27001",
      regulation: "ISO 27001:2013",
      priority: "Media",
      dueDate: "2024-05-15",
      responsible: "TI",
      status: "En Progreso",
      progress: 35,
      description: "Completar evaluación formal de riesgos de seguridad de la información",
      deliverables: ["Matriz de riesgos", "Plan de tratamiento", "Aprobación gerencial"],
      budget: "$50,000",
    },
  ]

  const auditSchedule = [
    {
      type: "Auditoría Interna",
      scope: "Protección de Datos",
      date: "2024-03-20",
      auditor: "Consultor Externo",
      status: "Programada",
      duration: "2 días",
      cost: "$400,500",
    },
    {
      type: "Revisión SIC",
      scope: "Cumplimiento RGPD",
      date: "2024-04-10",
      auditor: "Superintendencia",
      status: "Pendiente",
      duration: "1 día",
      cost: "N/A",
    },
    {
      type: "Auditoría ISO 27001",
      scope: "SGSI Completo",
      date: "2024-06-15",
      auditor: "Ente Certificador",
      status: "Planificada",
      duration: "3 días",
      cost: "$800,000",
    },
  ]

  const getComplianceColor = (compliance) => {
    if (compliance >= 80) return "text-green-600"
    if (compliance >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Cumple":
        return "bg-green-100 text-green-800"
      case "En Progreso":
        return "bg-blue-100 text-blue-800"
      case "Requiere Atención":
        return "bg-yellow-100 text-yellow-800"
      case "En Desarrollo":
        return "bg-purple-100 text-purple-800"
      case "Pendiente":
        return "bg-red-100 text-red-800"
      case "Planificado":
        return "bg-gray-100 text-gray-800"
      case "Programada":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Alta":
        return "bg-red-100 text-red-800"
      case "Media":
        return "bg-yellow-100 text-yellow-800"
      case "Baja":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const RegulationModal = ({ regulation }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Info className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {regulation.name}
          </DialogTitle>
          <DialogDescription>{regulation.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Cumplimiento</div>
              <div className={`text-2xl font-bold ${getComplianceColor(regulation.compliance)}`}>
                {regulation.compliance}%
              </div>
              <Progress value={regulation.compliance} />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Requisitos</div>
              <div className="text-2xl font-bold">
                {regulation.completed}/{regulation.requirements}
              </div>
              <div className="text-xs text-muted-foreground">Completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Estado</div>
              <Badge className={getStatusColor(regulation.status)}>{regulation.status}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Autoridad:</span> {regulation.authority}
            </div>
            <div>
              <span className="font-medium">Sanciones:</span> {regulation.penalties}
            </div>
            <div>
              <span className="font-medium">Última auditoría:</span> {regulation.lastAudit}
            </div>
            <div>
              <span className="font-medium">Próxima revisión:</span> {regulation.nextReview}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Requisitos Clave:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {regulation.keyRequirements.map((req, index) => (
                <li key={index}>• {req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Brechas Identificadas:
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {regulation.gaps.map((gap, index) => (
                <li key={index}>• {gap}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
            <Calendar className="h-3 w-3" />
            Última evaluación: {regulation.lastAudit}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  const ActionModal = ({ action }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Info className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            {action.title}
          </DialogTitle>
          <DialogDescription>{action.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Progreso</div>
              <div className="text-2xl font-bold">{action.progress}%</div>
              <Progress value={action.progress} />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Prioridad</div>
              <Badge className={getPriorityColor(action.priority)}>{action.priority}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Normativa:</span> {action.regulation}
            </div>
            <div>
              <span className="font-medium">Responsable:</span> {action.responsible}
            </div>
            <div>
              <span className="font-medium">Fecha límite:</span> {action.dueDate}
            </div>
            <div>
              <span className="font-medium">Presupuesto:</span> {action.budget}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Entregables:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {action.deliverables.map((deliverable, index) => (
                <li key={index}>• {deliverable}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
            <Calendar className="h-3 w-3" />
            Estado: {action.status}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="space-y-6">
      {/* Resumen Normativo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cumplimiento General</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">67%</div>
            <Progress value={67} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">4 normativas evaluadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acciones Pendientes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">8</div>
            <p className="text-xs text-muted-foreground">3 de alta prioridad</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próxima Auditoría</CardTitle>
            <Calendar className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">18</div>
            <p className="text-xs text-muted-foreground">días restantes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificaciones</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">1/3</div>
            <p className="text-xs text-muted-foreground">ISO 27001 en proceso</p>
          </CardContent>
        </Card>
      </div>

      {/* Estado de Cumplimiento por Normativa */}
      <Card>
        <CardHeader>
          <CardTitle>Estado de Cumplimiento Normativo</CardTitle>
          <CardDescription>Evaluación de cumplimiento por normativa aplicable</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {regulations.map((regulation, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-lg">{regulation.name}</h4>
                      <RegulationModal regulation={regulation} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{regulation.description}</p>
                  </div>
                  <Badge className={getStatusColor(regulation.status)}>{regulation.status}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm font-medium mb-1">Nivel de Cumplimiento</div>
                    <div className={`text-2xl font-bold ${getComplianceColor(regulation.compliance)}`}>
                      {regulation.compliance}%
                    </div>
                    <Progress value={regulation.compliance} className="mt-2" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Requisitos</div>
                    <div className="text-lg">
                      {regulation.completed}/{regulation.requirements}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {regulation.requirements - regulation.completed} pendientes
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Próxima Revisión</div>
                    <div className="text-lg">{regulation.nextReview}</div>
                    <div className="text-xs text-muted-foreground">Última: {regulation.lastAudit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Plan de Acciones de Cumplimiento */}
      <Card>
        <CardHeader>
          <CardTitle>Plan de Acciones de Cumplimiento</CardTitle>
          <CardDescription>Actividades programadas para mejorar el cumplimiento normativo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceActions.map((action) => (
              <div key={action.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{action.title}</h4>
                      <ActionModal action={action} />
                    </div>
                    <p className="text-sm text-muted-foreground">{action.regulation}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Badge className={getPriorityColor(action.priority)}>{action.priority}</Badge>
                    <Badge className={getStatusColor(action.status)}>{action.status}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm font-medium">Fecha Límite</div>
                    <div className="text-sm">{action.dueDate}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Responsable</div>
                    <div className="text-sm">{action.responsible}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Progreso</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={action.progress} className="flex-1" />
                      <span className="text-sm">{action.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calendario de Auditorías */}
      <Card>
        <CardHeader>
          <CardTitle>Calendario de Auditorías</CardTitle>
          <CardDescription>Auditorías programadas y revisiones normativas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {auditSchedule.map((audit, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-medium">{audit.type}</h4>
                    <p className="text-sm text-muted-foreground">
                      {audit.scope} - {audit.auditor} ({audit.duration})
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{audit.date}</div>
                  <div className="text-sm text-muted-foreground">Costo: {audit.cost}</div>
                  <Badge className={getStatusColor(audit.status)}>{audit.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
