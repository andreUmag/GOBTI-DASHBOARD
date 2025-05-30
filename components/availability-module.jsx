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
import { Server, Database, Wifi, Monitor, HardDrive, Activity, Info, Target, Calendar, BarChart3 } from "lucide-react"

export default function AvailabilityModule() {
  const systemStatus = [
    {
      name: "Servidor Principal",
      status: "Operativo",
      uptime: 99.2,
      lastIncident: "2024-01-28",
      sla: 99.5,
      icon: <Server className="w-5 h-5" />,
      description: "Servidor físico principal que aloja aplicaciones críticas",
      specs: "Dell PowerEdge R740, 32GB RAM, 2TB SSD",
      location: "Datacenter local",
      maintenanceWindow: "Domingos 02:00-04:00",
      contacts: ["Admin TI: ext. 101", "Soporte: ext. 102"],
      recentEvents: [
        "28 Ene: Reinicio programado - 5min downtime",
        "15 Ene: Actualización de seguridad",
        "10 Ene: Monitoreo de temperatura",
      ],
    },
    {
      name: "Base de Datos",
      status: "Operativo",
      uptime: 99.8,
      lastIncident: "2024-01-15",
      sla: 99.0,
      icon: <Database className="w-5 h-5" />,
      description: "Sistema de gestión de base de datos MySQL",
      specs: "MySQL 8.0, 16GB RAM dedicada",
      location: "Servidor principal",
      maintenanceWindow: "Sábados 23:00-01:00",
      contacts: ["DBA: ext. 103", "Desarrollo: ext. 104"],
      recentEvents: [
        "15 Ene: Optimización de consultas",
        "08 Ene: Backup completo exitoso",
        "01 Ene: Limpieza de logs antiguos",
      ],
    },
    {
      name: "Conexión Internet",
      status: "Degradado",
      uptime: 97.5,
      lastIncident: "2024-02-01",
      sla: 98.0,
      icon: <Wifi className="w-5 h-5" />,
      description: "Enlace principal de internet empresarial",
      specs: "Fibra óptica 100/50 Mbps",
      location: "Router principal",
      maintenanceWindow: "Según proveedor",
      contacts: ["Proveedor: 01-800-xxx", "Red: ext. 105"],
      recentEvents: [
        "01 Feb: Intermitencia reportada - 2h",
        "25 Ene: Latencia elevada - 30min",
        "20 Ene: Funcionamiento normal",
      ],
    },
    {
      name: "Sistema ERP",
      status: "Operativo",
      uptime: 98.9,
      lastIncident: "2024-01-22",
      sla: 98.5,
      icon: <Monitor className="w-5 h-5" />,
      description: "Sistema de planificación de recursos empresariales",
      specs: "Aplicación web, 8GB RAM asignada",
      location: "Servidor principal",
      maintenanceWindow: "Domingos 01:00-02:00",
      contacts: ["Funcional: ext. 106", "Técnico: ext. 107"],
      recentEvents: [
        "22 Ene: Lentitud en módulo inventarios",
        "18 Ene: Actualización de reportes",
        "12 Ene: Capacitación usuarios nuevos",
      ],
    },
    {
      name: "Almacenamiento",
      status: "Mantenimiento",
      uptime: 95.2,
      lastIncident: "2024-02-02",
      sla: 97.0,
      icon: <HardDrive className="w-5 h-5" />,
      description: "Sistema de almacenamiento compartido (NAS)",
      specs: "Synology DS920+, 4TB RAID 5",
      location: "Rack principal",
      maintenanceWindow: "Viernes 22:00-24:00",
      contacts: ["Storage: ext. 108", "Backup: ext. 109"],
      recentEvents: [
        "02 Feb: Mantenimiento preventivo en curso",
        "28 Ene: Expansión de capacidad",
        "20 Ene: Verificación de integridad",
      ],
    },
  ]

  const performanceMetrics = [
    { metric: "Tiempo de Respuesta Promedio", value: "1.2s", target: "< 2s", status: "good" },
    { metric: "Throughput de Red", value: "45 Mbps", target: "50 Mbps", status: "warning" },
    { metric: "Uso de CPU Servidor", value: "68%", target: "< 80%", status: "good" },
    { metric: "Uso de Memoria", value: "82%", target: "< 85%", status: "warning" },
    { metric: "Espacio en Disco", value: "76%", target: "< 90%", status: "good" },
    { metric: "Latencia de Red", value: "25ms", target: "< 50ms", status: "good" },
  ]

  const incidents = [
    {
      id: "INC-2024-015",
      title: "Lentitud en Sistema ERP",
      severity: "Media",
      status: "Resuelto",
      startTime: "2024-02-01 14:30",
      duration: "2h 15m",
      impact: "Usuarios reportaron lentitud en módulo de inventarios",
      resolution: "Optimización de consultas de base de datos",
      affectedUsers: 12,
      rootCause: "Consulta SQL no optimizada en reporte de inventarios",
    },
    {
      id: "INC-2024-014",
      title: "Caída de Conexión Internet",
      severity: "Alta",
      status: "Resuelto",
      startTime: "2024-02-01 09:15",
      duration: "45m",
      impact: "Pérdida total de conectividad externa",
      resolution: "Reinicio de router y coordinación con proveedor",
      affectedUsers: 32,
      rootCause: "Falla en equipo del proveedor de internet",
    },
    {
      id: "INC-2024-013",
      title: "Backup Fallido",
      severity: "Media",
      status: "En Investigación",
      startTime: "2024-01-31 03:00",
      duration: "Ongoing",
      impact: "Copia de seguridad nocturna no completada",
      resolution: "En análisis de logs del sistema",
      affectedUsers: 0,
      rootCause: "Por determinar - análisis en curso",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Operativo":
        return "bg-green-100 text-green-800"
      case "Degradado":
        return "bg-yellow-100 text-yellow-800"
      case "Mantenimiento":
        return "bg-blue-100 text-blue-800"
      case "Crítico":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
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

  const getMetricStatus = (status) => {
    switch (status) {
      case "good":
        return "text-green-600"
      case "warning":
        return "text-yellow-600"
      case "critical":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const SystemModal = ({ system }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Info className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {system.icon}
            {system.name}
          </DialogTitle>
          <DialogDescription>{system.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Uptime Actual</div>
              <div className="text-2xl font-bold">{system.uptime}%</div>
              <Progress value={system.uptime} />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">SLA Objetivo</div>
              <div className="text-2xl font-bold text-green-600">{system.sla}%</div>
              <Badge className={getStatusColor(system.status)}>{system.status}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Especificaciones:</span> {system.specs}
            </div>
            <div>
              <span className="font-medium">Ubicación:</span> {system.location}
            </div>
            <div>
              <span className="font-medium">Ventana de mantenimiento:</span> {system.maintenanceWindow}
            </div>
            <div>
              <span className="font-medium">Último incidente:</span> {system.lastIncident}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Contactos:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {system.contacts.map((contact, index) => (
                <li key={index}>• {contact}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Eventos Recientes:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {system.recentEvents.map((event, index) => (
                <li key={index}>• {event}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
            <Calendar className="h-3 w-3" />
            Información actualizada en tiempo real
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  const IncidentModal = ({ incident }) => (
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
            {incident.title}
          </DialogTitle>
          <DialogDescription>ID: {incident.id}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Severidad</div>
              <Badge className={getSeverityColor(incident.severity)}>{incident.severity}</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Estado</div>
              <Badge className={getStatusColor(incident.status)}>{incident.status}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Inicio:</span> {incident.startTime}
            </div>
            <div>
              <span className="font-medium">Duración:</span> {incident.duration}
            </div>
            <div>
              <span className="font-medium">Usuarios afectados:</span> {incident.affectedUsers}
            </div>
            <div>
              <span className="font-medium">Causa raíz:</span> {incident.rootCause}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Descripción del Impacto:</h4>
            <p className="text-sm text-muted-foreground">{incident.impact}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Resolución:
            </h4>
            <p className="text-sm text-muted-foreground">{incident.resolution}</p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground border-t pt-3">
            <Calendar className="h-3 w-3" />
            Última actualización: Hoy
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="space-y-6">
      {/* Resumen de Disponibilidad */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disponibilidad General</CardTitle>
            <Activity className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">98.1%</div>
            <p className="text-xs text-muted-foreground">Último mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sistemas Operativos</CardTitle>
            <Server className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">3/5</div>
            <p className="text-xs text-muted-foreground">2 en mantenimiento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidentes Activos</CardTitle>
            <Activity className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <p className="text-xs text-muted-foreground">En investigación</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MTTR Promedio</CardTitle>
            <Activity className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">1.5h</div>
            <p className="text-xs text-muted-foreground">Tiempo de resolución</p>
          </CardContent>
        </Card>
      </div>

      {/* Estado de Sistemas */}
      <Card>
        <CardHeader>
          <CardTitle>Estado de Sistemas Críticos</CardTitle>
          <CardDescription>Monitoreo en tiempo real de infraestructura TI</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {system.icon}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{system.name}</h4>
                      <SystemModal system={system} />
                    </div>
                    <p className="text-sm text-muted-foreground">Último incidente: {system.lastIncident}</p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <Badge className={getStatusColor(system.status)}>{system.status}</Badge>
                  <div>
                    <div className="text-sm font-medium">Uptime: {system.uptime}%</div>
                    <div className="text-xs text-muted-foreground">SLA: {system.sla}%</div>
                    <Progress value={system.uptime} className="w-24 mt-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Métricas de Rendimiento */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas de Rendimiento</CardTitle>
          <CardDescription>Indicadores clave de performance de sistemas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-medium text-sm mb-2">{metric.metric}</h4>
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold ${getMetricStatus(metric.status)}`}>{metric.value}</span>
                  <span className="text-sm text-muted-foreground">Meta: {metric.target}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Historial de Incidentes */}
      <Card>
        <CardHeader>
          <CardTitle>Incidentes Recientes</CardTitle>
          <CardDescription>Registro de eventos que afectaron la disponibilidad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{incident.title}</h4>
                      <IncidentModal incident={incident} />
                    </div>
                    <p className="text-sm text-muted-foreground">ID: {incident.id}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge className={getSeverityColor(incident.severity)}>{incident.severity}</Badge>
                    <div className="text-xs text-muted-foreground">{incident.status}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Inicio:</span> {incident.startTime}
                  </div>
                  <div>
                    <span className="font-medium">Duración:</span> {incident.duration}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="font-medium">Impacto:</span> {incident.impact}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
