"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle, XCircle, Clock, AlertTriangle, Info, Target, Calendar, BarChart3, FileText } from "lucide-react"

export default function ComplianceModule() {
  const cobitDomains = [
    {
      name: "Evaluar, Dirigir y Monitorear (EDM)",
      score: 65,
      status: "En Progreso",
      color: "yellow",
      processes: 5,
      implemented: 3,
      description: "Gobierno corporativo de TI, gestión de beneficios y optimización de riesgos",
      keyProcesses: ["EDM01 - Marco de Gobierno", "EDM02 - Gestión de Beneficios", "EDM03 - Optimización de Riesgos"],
      nextActions: ["Definir estructura de gobierno", "Implementar comité de TI", "Establecer métricas de valor"],
    },
    {
      name: "Alinear, Planificar y Organizar (APO)",
      score: 72,
      status: "Bueno",
      color: "green",
      processes: 13,
      implemented: 9,
      description: "Estrategia de TI, arquitectura empresarial y gestión de recursos",
      keyProcesses: ["APO01 - Estrategia de TI", "APO02 - Estrategia y Arquitectura", "APO07 - Recursos Humanos"],
      nextActions: ["Actualizar plan estratégico", "Documentar arquitectura actual", "Plan de capacitación"],
    },
    {
      name: "Construir, Adquirir e Implementar (BAI)",
      score: 58,
      status: "Requiere Atención",
      color: "red",
      processes: 11,
      implemented: 6,
      description: "Desarrollo, adquisición e implementación de soluciones TI",
      keyProcesses: ["BAI01 - Programas y Proyectos", "BAI02 - Definición de Requisitos", "BAI06 - Gestión de Cambios"],
      nextActions: ["Metodología de proyectos", "Gestión de requisitos", "Control de cambios formal"],
    },
    {
      name: "Entregar, Dar Servicio y Soporte (DSS)",
      score: 78,
      status: "Bueno",
      color: "green",
      processes: 6,
      implemented: 5,
      description: "Operaciones de TI, gestión de servicios y soporte a usuarios",
      keyProcesses: ["DSS01 - Gestión de Operaciones", "DSS02 - Gestión de Servicios", "DSS03 - Gestión de Problemas"],
      nextActions: ["Automatizar operaciones", "Mejorar catálogo de servicios", "Base de conocimiento"],
    },
    {
      name: "Monitorear, Evaluar y Valorar (MEA)",
      score: 45,
      status: "Crítico",
      color: "red",
      processes: 3,
      implemented: 1,
      description: "Monitoreo del rendimiento, cumplimiento y auditoría interna",
      keyProcesses: ["MEA01 - Monitoreo y Evaluación", "MEA02 - Sistema de Control Interno", "MEA03 - Cumplimiento"],
      nextActions: ["Implementar dashboard de métricas", "Auditorías internas", "Controles de cumplimiento"],
    },
  ]

  const policies = [
    {
      name: "Política de Uso Aceptable",
      status: "Implementada",
      compliance: 95,
      lastReview: "2024-01-15",
      scope: "Todos los usuarios",
      owner: "RRHH/TI",
      nextReview: "2024-07-15",
      violations: 2,
      description: "Define el uso apropiado de recursos tecnológicos de la empresa",
    },
    {
      name: "Política de Seguridad de la Información",
      status: "En Revisión",
      compliance: 78,
      lastReview: "2024-02-01",
      scope: "Toda la organización",
      owner: "Seguridad TI",
      nextReview: "2024-05-01",
      violations: 0,
      description: "Marco de seguridad para protección de activos de información",
    },
    {
      name: "Política de Respaldo y Recuperación",
      status: "Implementada",
      compliance: 88,
      lastReview: "2024-01-20",
      scope: "Infraestructura TI",
      owner: "Operaciones TI",
      nextReview: "2024-07-20",
      violations: 1,
      description: "Procedimientos para garantizar continuidad del negocio",
    },
    {
      name: "Política de Gestión de Accesos",
      status: "Pendiente",
      compliance: 45,
      lastReview: "2023-12-10",
      scope: "Todos los sistemas",
      owner: "Seguridad TI",
      nextReview: "2024-03-10",
      violations: 5,
      description: "Control de accesos y privilegios de usuarios",
    },
    {
      name: "Política de Gestión de Incidentes",
      status: "En Desarrollo",
      compliance: 62,
      lastReview: "2024-02-05",
      scope: "Mesa de ayuda",
      owner: "Soporte TI",
      nextReview: "2024-06-05",
      violations: 3,
      description: "Procedimientos para manejo y resolución de incidentes",
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "Implementada":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "En Revisión":
      case "En Desarrollo":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "Pendiente":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Implementada":
      case "Bueno":
        return "bg-green-100 text-green-800"
      case "En Revisión":
      case "En Desarrollo":
      case "En Progreso":
        return "bg-yellow-100 text-yellow-800"
      case "Pendiente":
      case "Requiere Atención":
      case "Crítico":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const DomainModal = ({ domain }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
          <Info className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            {domain.name}
          </DialogTitle>
          <DialogDescription>{domain.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Puntuación Actual</div>
              <div className="text-2xl font-bold">{domain.score}/100</div>
              <Progress value={domain.score} />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Procesos</div>
              <div className="text-2xl font-bold">
                {domain.implemented}/{domain.processes}
              </div>
              <div className="text-xs text-muted-foreground">Implementados</div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Procesos Clave:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {domain.keyProcesses.map((process, index) => (
                <li key={index}>• {process}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Próximas Acciones:
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {domain.nextActions.map((action, index) => (
                <li key={index}>• {action}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  const PolicyModal = ({ policy }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Info className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {policy.name}
          </DialogTitle>
          <DialogDescription>{policy.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Cumplimiento</div>
              <div className="text-2xl font-bold">{policy.compliance}%</div>
              <Progress value={policy.compliance} />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Estado</div>
              <Badge className={getStatusColor(policy.status)}>{policy.status}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Alcance:</span> {policy.scope}
            </div>
            <div>
              <span className="font-medium">Responsable:</span> {policy.owner}
            </div>
            <div>
              <span className="font-medium">Última revisión:</span> {policy.lastReview}
            </div>
            <div>
              <span className="font-medium">Próxima revisión:</span> {policy.nextReview}
            </div>
          </div>

          {policy.violations > 0 && (
            <div className="p-3 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-medium">Violaciones detectadas: {policy.violations}</span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
            <Calendar className="h-3 w-3" />
            Información actualizada al {policy.lastReview}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="space-y-6">
      {/* Resumen de Cumplimiento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Nivel de Madurez COBIT</CardTitle>
            <CardDescription>Evaluación general según COBIT 2019</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-center mb-4">Nivel 2</div>
            <div className="text-center text-sm text-muted-foreground">Procesos Gestionados</div>
            <Progress value={68} className="mt-4" />
            <p className="text-xs text-muted-foreground mt-2 text-center">68% de cumplimiento general</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Políticas Activas</CardTitle>
            <CardDescription>Estado de implementación</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-center mb-4">3/5</div>
            <div className="text-center text-sm text-muted-foreground">Políticas Implementadas</div>
            <Progress value={60} className="mt-4" />
            <p className="text-xs text-muted-foreground mt-2 text-center">2 políticas pendientes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Próxima Auditoría</CardTitle>
            <CardDescription>Evaluación externa programada</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-center mb-4">45</div>
            <div className="text-center text-sm text-muted-foreground">Días restantes</div>
            <Progress value={25} className="mt-4" />
            <p className="text-xs text-muted-foreground mt-2 text-center">Marzo 15, 2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Dominios COBIT */}
      <Card>
        <CardHeader>
          <CardTitle>Evaluación por Dominios COBIT 2019</CardTitle>
          <CardDescription>Puntuación de madurez por cada dominio de gobierno y gestión</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cobitDomains.map((domain, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <h4 className="font-medium">{domain.name}</h4>
                      <DomainModal domain={domain} />
                    </div>
                    <Badge className={getStatusColor(domain.status)}>{domain.status}</Badge>
                  </div>
                  <Progress value={domain.score} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Puntuación: {domain.score}/100</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Estado de Políticas */}
      <Card>
        <CardHeader>
          <CardTitle>Estado de Políticas TI</CardTitle>
          <CardDescription>Seguimiento de implementación y cumplimiento de políticas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(policy.status)}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{policy.name}</h4>
                      <PolicyModal policy={policy} />
                    </div>
                    <p className="text-sm text-muted-foreground">Última revisión: {policy.lastReview}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(policy.status)}>{policy.status}</Badge>
                  <div className="mt-2 w-24">
                    <Progress value={policy.compliance} />
                    <p className="text-xs text-muted-foreground mt-1">{policy.compliance}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
